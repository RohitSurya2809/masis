"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";

export function AdShootsSection() {
  return (
    <section className="py-20 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f1724] via-[#111827] to-[#0a0c14] border border-blue-500/15 p-10 lg:p-16">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6"
              >
                <Video size={26} className="text-blue-400" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="text-amber-400">Ad Shoots</span>
                <span className="text-white"> & Video Dimension</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 leading-relaxed max-w-lg mb-8"
              >
                From concept to final cut, we create stunning visuals that tell
                your brand&apos;s story. Professional shoots, motion graphics, and
                compelling video content built to convert.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/services#production"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-primary"
                >
                  Explore Our Production
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right visual: production capability cards */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full lg:w-80">
              {[
                { title: "TV Commercials", desc: "Broadcast-ready ads" },
                { title: "Social Reels", desc: "Platform-native content" },
                { title: "Product Shoots", desc: "Studio & on-location" },
                { title: "Motion Graphics", desc: "Animated brand assets" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white/[0.03] border border-blue-500/10 p-4"
                >
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
