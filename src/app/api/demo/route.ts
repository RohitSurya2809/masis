import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";
import { createServerClient } from "@/lib/supabase-server";

const schema = z.object({
  fullName: z.string().min(2).max(100).transform((s) => s.trim()),
  workEmail: z.email().transform((s) => s.toLowerCase().trim()),
  company: z.string().min(1).max(100).transform((s) => s.trim()),
  phone: z.string().max(20).optional().transform((s) => s?.trim() || null),
  service: z.string().max(100).optional().transform((s) => s?.trim() || null),
  preferredDate: z
    .string()
    .optional()
    .transform((s) => (s && s.trim() ? s.trim() : null)),
  message: z.string().max(2000).optional().transform((s) => s?.trim() || null),
});

// Rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
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
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: result.error.issues },
      { status: 422 }
    );
  }

  const { fullName, workEmail, company, phone, service, preferredDate, message } =
    result.data;

  let supabase;
  try {
    supabase = createServerClient();
  } catch {
    console.error("[demo] Supabase not configured");
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please contact us directly." },
      { status: 503 }
    );
  }

  const { error: dbError } = await supabase.from("demo_requests").insert({
    full_name: fullName,
    work_email: workEmail,
    company,
    phone: phone ?? null,
    service: service ?? null,
    preferred_date: preferredDate ?? null,
    message: message ?? null,
    status: "pending",
  });

  if (dbError) {
    console.error("[demo] DB error:", dbError.message);
    return NextResponse.json(
      { error: "Failed to save your request. Please try again." },
      { status: 500 }
    );
  }

  // Email notification (best-effort)
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL ?? "hello@masis.in";
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "MASIS Website <noreply@masis.in>",
        to: [notifyEmail],
        subject: `New Demo Request from ${fullName} (${company})`,
        text: [
          `Name: ${fullName}`,
          `Work Email: ${workEmail}`,
          `Company: ${company}`,
          `Phone: ${phone ?? "Not provided"}`,
          `Service: ${service ?? "Not specified"}`,
          `Preferred Date: ${preferredDate ?? "Not specified"}`,
          `Message: ${message ?? "None"}`,
        ].join("\n\n"),
      });
    }
  } catch (emailErr) {
    console.error("[demo] Email notification failed:", emailErr);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
