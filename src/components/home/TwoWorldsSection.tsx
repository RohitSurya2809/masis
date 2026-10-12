"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function TwoWorldsSection() {
  return (
    <section className="py-20 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-slate-500 mb-3"
        >
          Two Worlds. One Strategy.
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          <span className="text-amber-400">Traditional</span>{" "}
          <span className="text-white">Marketing</span>
          <br />
          <span className="text-blue-400">+ Digital</span>{" "}
          <span className="text-white">Marketing</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
              We combine the power of traditional and digital marketing with the
              latest technology to create campaigns that are creative, measurable,
              and designed for real business growth.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Two-panel visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Traditional panel */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900/20 to-[#0f1724] border border-amber-500/20 p-6 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-amber-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Traditional</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  TV, Radio, Print, Billboards, Events, PR
                </p>
              </div>
              <span className="text-amber-400/60 text-xs uppercase tracking-widest">Timeless</span>
            </div>

            {/* Digital panel */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-[#0f1724] border border-blue-500/20 p-6 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Digital</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  SEO, Social, Ads, Content, Email, AI
                </p>
              </div>
              <span className="text-blue-400/60 text-xs uppercase tracking-widest">Scalable</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
