"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950/60 via-[#0f1724] to-[#0a0c14] border border-blue-500/20 px-8 py-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-600/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
              Ready to Grow?
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Something Big
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Your brand deserves more than just visibility — it deserves impact.
              Let&apos;s discuss how MASIS can take your marketing to the next level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold btn-gold text-base"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
