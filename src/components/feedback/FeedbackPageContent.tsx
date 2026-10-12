"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Star, ShieldCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-600"}
        />
      ))}
    </div>
  );
}

export function FeedbackPageContent() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <div className="min-h-screen bg-[#07090f] pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0d1117] to-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">
              Client Voices
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We believe in building real relationships. Every review on this page
              is genuine, verified, and approved by the client who shared it.
            </p>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
          >
            <ShieldCheck size={16} />
            All testimonials on this page are genuine and client-approved.
          </motion.div>
        </div>
      </section>

      {/* Testimonials grid / empty state */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasTestimonials ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl bg-[#111827] border border-blue-500/10 p-6 hover:border-blue-500/25 transition-all"
                >
                  {/* Rating */}
                  <StarRating rating={t.rating} />

                  {/* Review text */}
                  <blockquote className="mt-4 mb-5 text-slate-300 text-sm leading-relaxed">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 pt-4 border-t border-blue-500/10">
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt={`${t.name} profile photo`}
                        width={40}
                        height={40}
                        unoptimized
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-sm">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-slate-500 text-xs">
                        {t.designation}
                        {t.company ? `, ${t.company}` : ""}
                      </p>
                    </div>
                  </div>

                  {t.service && (
                    <div className="mt-3">
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        {t.service}
                      </span>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          ) : (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl border border-blue-500/10 bg-[#0d1117] p-16 text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                <MessageSquare size={24} className="text-blue-400" />
              </div>
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Testimonials Coming Soon
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                We only display genuine, approved customer testimonials. We&apos;re
                currently collecting and verifying feedback from our clients.
                <br /><br />
                Real reviews will appear here once they&apos;ve been approved.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
