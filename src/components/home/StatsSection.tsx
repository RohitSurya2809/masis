"use client";

import { motion } from "framer-motion";
import { Users, Globe, Megaphone, Star } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  users: Users,
  globe: Globe,
  megaphone: Megaphone,
  star: Star,
};

export function StatsSection() {
  return (
    <section className="bg-[#0d1117] border-y border-blue-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Star;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-1">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
