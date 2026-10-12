"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Calendar, Briefcase } from "lucide-react";
import { allServices } from "@/data/services";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  workEmail: z.email("Please enter a valid work email"),
  company: z.string().min(1, "Company name is required").max(100),
  phone: z.string().max(20).optional().or(z.literal("")),
  service: z.string().optional(),
  preferredDate: z.string().optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;
type SubmitState = "idle" | "loading" | "success" | "error";

export function DemoPageContent() {
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
      const res = await fetch("/api/demo", {
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-widest text-blue-400 mb-3"
            >
              Start Here
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
            >
              Get a Demo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Request a personalised discussion or demonstration of MASIS services.
              Fill in the form below and one of our team members will be in touch to
              confirm a time that works for you.
            </motion.p>
          </div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              "No commitment required",
              "Tailored to your goals",
              "Confirmed within 1 business day",
            ].map((text) => (
              <span
                key={text}
                className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important notice */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-amber-300/80">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-amber-400" />
          <span>
            <strong className="text-amber-400">Note:</strong> Submitting this form sends a
            demo request — it does not automatically book a meeting. A MASIS team member
            will contact you to schedule a confirmed appointment.
          </span>
        </div>
      </div>

      {/* Form */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-[#0d1117] border border-blue-500/15 p-8"
          >
            {submitState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Request Received</h2>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you for your demo request. Your submission has been saved and a
                  member of our team will be in touch to arrange a confirmed time.
                </p>
                <p className="text-xs text-slate-600 mt-4">
                  Expected response: within 1 business day
                </p>
                <button
                  onClick={() => setSubmitState("idle")}
                  className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <h2 className="text-lg font-semibold text-white mb-6">Request Details</h2>

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
                    placeholder="Your full name"
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400" role="alert">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-sm text-slate-400 mb-1.5">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    autoComplete="email"
                    {...register("workEmail")}
                    placeholder="you@company.com"
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    aria-invalid={!!errors.workEmail}
                  />
                  {errors.workEmail && (
                    <p className="mt-1 text-xs text-red-400" role="alert">{errors.workEmail.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm text-slate-400 mb-1.5">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    {...register("company")}
                    placeholder="Your company"
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-400" role="alert">{errors.company.message}</p>
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
                    placeholder="+91 00000 00000"
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm text-slate-400 mb-1.5">
                    <Briefcase size={13} className="inline mr-1 text-slate-500" />
                    Service of Interest <span className="text-slate-600">(optional)</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {allServices.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm text-slate-400 mb-1.5">
                    <Calendar size={13} className="inline mr-1 text-slate-500" />
                    Preferred Date <span className="text-slate-600">(optional)</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    {...register("preferredDate")}
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
                    Additional Message <span className="text-slate-600">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={3}
                    placeholder="Tell us about your goals or questions..."
                    className="w-full bg-[#111827] border border-blue-500/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
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
                  className="w-full py-3.5 rounded-xl font-semibold text-sm btn-gold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Request a Demo
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
