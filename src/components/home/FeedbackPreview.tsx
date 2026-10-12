"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";

// This section shows an empty state until genuine approved testimonials are available.
// Testimonial data lives in src/data/testimonials.ts — add approved reviews there.
export function FeedbackPreview() {
  return (
    <section className="py-20 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
              Client Voices
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <Link
            href="/feedback"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            View All Feedback →
          </Link>
        </motion.div>

        {/* Empty state — will be replaced by real testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-blue-500/10 bg-[#0d1117] p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
            <MessageSquare size={24} className="text-blue-400" />
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-white font-semibold mb-2">
            Approved Testimonials Coming Soon
          </h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            We&apos;re collecting genuine feedback from our clients. Real, verified
            testimonials will appear here once approved.
          </p>
          <Link
            href="/feedback"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            Visit Feedback Page
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
