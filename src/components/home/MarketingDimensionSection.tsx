"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tv, Newspaper, LayoutDashboard, CalendarDays, Mail, Shield,
  Share2, FileText, Inbox, Users, UserCheck,
} from "lucide-react";

const categories = [
  {
    title: "TV & Radio Ads",
    icon: Tv,
  },
  {
    title: "Print Media",
    icon: Newspaper,
  },
  {
    title: "Billboards & Outdoor",
    icon: LayoutDashboard,
  },
  {
    title: "Events & Exhibition",
    icon: CalendarDays,
  },
  {
    title: "Direct Marketing",
    icon: Mail,
  },
  {
    title: "PR & Reputation",
    icon: Shield,
  },
  {
    title: "Social Media",
    icon: Share2,
  },
  {
    title: "Influencer Marketing",
    icon: Users,
  },
  {
    title: "Content Marketing",
    icon: FileText,
  },
  {
    title: "Email Marketing",
    icon: Inbox,
  },
  {
    title: "Personal Branding",
    icon: UserCheck,
  },
];

export function MarketingDimensionSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Marketing in Every Dimension
          </h2>
          <p className="text-slate-400 max-w-xl">
            From the streets to the screen, from local to global — we make your
            brand visible everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#111827] border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <span className="text-xs text-slate-300 leading-tight font-medium">
                  {cat.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-primary"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
