"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Plane, Wind, Smartphone, MessageCircle, Globe } from "lucide-react";

const newAgeTech = [
  { icon: Plane, label: "Drone Marketing" },
  { icon: Wind, label: "Balloon Branding" },
  { icon: Cpu, label: "AI-Powered Campaigns" },
  { icon: MessageCircle, label: "WhatsApp Marketing" },
  { icon: Smartphone, label: "App Marketing" },
  { icon: Globe, label: "International Marketing" },
];

export function NewAgeSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">
              Next-Gen Marketing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              New-Age Marketing
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We use modern technology and platforms to get your brand in front of
              the right audience — whether that&apos;s through AI, drones, WhatsApp
              campaigns, or balloon activations that stop people in their tracks.
            </p>
            <Link
              href="/services#advanced"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-gold"
            >
              Explore Advanced Marketing
            </Link>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {newAgeTech.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#111827] border border-blue-500/10 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Icon size={18} className="text-amber-400" />
                  </div>
                  <span className="text-xs text-slate-300 leading-tight font-medium">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
