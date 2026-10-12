"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Target, Lightbulb, BarChart2, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const strengths = [
  { icon: Target, title: "Full-Service Solutions", desc: "From strategy to execution, every marketing need covered under one roof." },
  { icon: Lightbulb, title: "Creative Excellence", desc: "Campaigns that stand out, resonate, and stay in memory." },
  { icon: BarChart2, title: "Data-Driven Strategies", desc: "Every decision backed by insights, analytics, and measurable results." },
  { icon: Globe, title: "Global Reach", desc: "Local roots with the capability to connect your brand to global markets." },
  { icon: CheckCircle2, title: "Transparent Communication", desc: "Clear reporting, honest timelines, and open dialogue throughout every project." },
];

export function AboutPageContent() {
  return (
    <div className="min-h-screen bg-[#07090f] pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0d1117] to-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">About MASIS</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                We Turn Ideas into{" "}
                <span className="text-gradient-blue">Impact</span>
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg max-w-lg">
                MASIS is a full-service digital and traditional marketing agency,
                helping brands grow, connect and lead in today&apos;s fast-changing world.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold btn-gold"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-3xl bg-gradient-to-br from-blue-950/30 to-[#0f1724] border border-blue-500/20 p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <span className="text-3xl font-black text-white">M</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  We Don&apos;t Just Market<br />We Build Brands.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From strategy to execution, we are your partner in growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  MASIS was born with a simple belief — great marketing isn&apos;t just
                  about selling. It&apos;s about creating real connections.
                </p>
                <p>
                  We bring together creativity, technology and strategy to help
                  businesses of all sizes build their brand, reach new audiences and
                  achieve sustainable growth.
                </p>
                <p>
                  Our team works at the intersection of traditional and digital
                  marketing, combining proven methods with innovative approaches that
                  deliver real, measurable results.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#111827] border border-blue-500/10 p-6 text-center"
                >
                  <span className="block text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Mission",
                color: "blue",
                content:
                  "To deliver creative, data-driven marketing solutions that help businesses of every size grow, connect with their audience, and achieve lasting impact.",
              },
              {
                title: "Our Vision",
                color: "amber",
                content:
                  "To be the marketing partner that brands trust most — known for results, integrity, and a genuine commitment to client success.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 border ${
                  item.color === "blue"
                    ? "bg-blue-950/20 border-blue-500/20"
                    : "bg-amber-950/10 border-amber-500/20"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    item.color === "blue" ? "text-blue-400" : "text-amber-400"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MASIS */}
      <section className="py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose MASIS?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Five reasons clients trust us with their most important marketing challenges.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl bg-[#111827] border border-blue-500/10 p-6 text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-950/40 to-[#0f1724] border border-blue-500/20 p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Local Roots. Global Vision.
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Wherever you are, we&apos;re here to help your brand reach further.
            </p>
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold btn-gold"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
