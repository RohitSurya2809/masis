"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { allServices } from "@/data/services";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.email("Please enter a valid email address"),
  phone: z.string().max(20).optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactPageContent() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setSubmitState("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMessage(json.error ?? "Submission failed. Please try again.");
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
      reset();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitState("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#07090f] pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0d1117] to-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-slate-400 leading-relaxed">
              We&apos;d love to hear from you. Send us an enquiry and we&apos;ll get
              back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-blue-500/10 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                      <p className="text-white text-sm font-medium">{siteConfig.contact.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-blue-500/10 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium">{siteConfig.contact.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-blue-500/10">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Location</p>
                      <p className="text-white text-sm font-medium">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-green-500/20 hover:border-green-500/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle size={18} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                      <p className="text-white text-sm font-medium">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl bg-[#0d1117] border border-blue-500/15 p-8">
                {submitState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={28} className="text-green-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2">Enquiry Received</h2>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. Your message has been stored and we&apos;ll
                      respond to you within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitState("idle")}
                      className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <h2 className="text-lg font-semibold text-white mb-6">Send a Message</h2>

                    {/* Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm text-slate-400 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        {...register("fullName")}
                        placeholder="Your Name"
                        className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-red-400" role="alert">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        placeholder="Your Email"
                        className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-slate-400 mb-1.5">
                        Phone <span className="text-slate-600">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        placeholder="Your Phone"
                        className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm text-slate-400 mb-1.5">
                        Service of Interest <span className="text-slate-600">(optional)</span>
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {allServices.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={4}
                        placeholder="Your Message"
                        className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Error banner */}
                    {submitState === "error" && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm btn-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageSquare size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
