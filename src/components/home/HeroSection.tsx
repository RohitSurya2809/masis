"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07090f] via-[#0a0f1e] to-[#07090f]" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orb top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      {/* Glow orb bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      {/* Right-side decorative city silhouette gradient (replaces image) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-950/30 via-transparent to-transparent pointer-events-none" />

      {/* Animated dots / lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              height: "60%",
              top: "20%",
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.7,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Digital
              </span>
              <span className="text-slate-600">+</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Traditional
              </span>
              <span className="text-slate-600">+</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                AI
              </span>
              <span className="text-slate-600">+</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Global
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Marketing</span>
              <br />
              <span className="text-white">Beyond </span>
              <span className="text-gradient-blue">Limits</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              From local streets to global markets — we create powerful marketing
              strategies that connect brands with people, everywhere.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-primary"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
              >
                Get in Touch
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual that never overlaps text */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-br from-blue-950/40 via-[#0e1628] to-[#07090f] border border-blue-500/20 p-8 flex flex-col justify-between shadow-2xl shadow-blue-950/50"
            >
              {/* Subtle ambient glow in card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Top tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  Full-Funnel Growth
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Central Graphic */}
              <div className="relative z-10 py-6 my-auto text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/25 mb-4 border border-blue-400/20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 14V4L7 10L9 7L11 10L16 4V14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold tracking-tight">
                  MASIS Agency
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Creative • Performance • Technology
                </p>
              </div>

              {/* Bottom metrics mini-bar */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-blue-500/15">
                <div className="bg-white/[0.02] border border-blue-500/10 rounded-xl p-2.5 text-center">
                  <div className="text-xs font-bold text-white">360°</div>
                  <div className="text-[10px] text-slate-500">Multi-Channel</div>
                </div>
                <div className="bg-white/[0.02] border border-blue-500/10 rounded-xl p-2.5 text-center">
                  <div className="text-xs font-bold text-amber-400">ROI-First</div>
                  <div className="text-[10px] text-slate-500">Targeted Reach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
