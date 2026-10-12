import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";
import { createServerClient } from "@/lib/supabase-server";

const schema = z.object({
  fullName: z.string().min(2).max(100).transform((s) => s.trim()),
  email: z.email().transform((s) => s.toLowerCase().trim()),
  phone: z.string().max(20).optional().transform((s) => s?.trim() || null),
  service: z.string().max(100).optional().transform((s) => s?.trim() || null),
  message: z.string().min(10).max(2000).transform((s) => s.trim()),
});

// Simple in-memory rate limiter (resets on cold start — adequate for MVP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: result.error.issues },
      { status: 422 }
    );
  }

  const { fullName, email, phone, service, message } = result.data;

  // Persist to Supabase
  let supabase;
  try {
    supabase = createServerClient();
  } catch {
    // Supabase not configured — log server-side, return generic error
    console.error("[contact] Supabase not configured");
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please contact us directly." },
      { status: 503 }
    );
  }

  const { error: dbError } = await supabase.from("contact_submissions").insert({
    full_name: fullName,
    email,
    phone: phone ?? null,
    service: service ?? null,
    message,
    status: "new",
  });

  if (dbError) {
    console.error("[contact] DB error:", dbError.message);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again or contact us directly." },
      { status: 500 }
    );
  }

  // Email notification (best-effort — failure doesn't lose the submission)
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL ?? "hello@masis.in";
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "MASIS Website <noreply@masis.in>",
        to: [notifyEmail],
        subject: `New Contact Enquiry from ${fullName}`,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Phone: ${phone ?? "Not provided"}`,
          `Service: ${service ?? "Not specified"}`,
          `Message:\n${message}`,
        ].join("\n\n"),
      });
    }
  } catch (emailErr) {
    // Email failure is non-fatal — submission is already saved
    console.error("[contact] Email notification failed:", emailErr);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
