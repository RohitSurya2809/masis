"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceGroups, type ServiceCategory } from "@/data/services";

type FilterTab = "all" | ServiceCategory;

const filterTabs: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "traditional", label: "Traditional" },
  { id: "digital", label: "Digital" },
  { id: "advanced", label: "AI & New Tech" },
];

import {
  Tv,
  Newspaper,
  LayoutDashboard,
  CalendarDays,
  Mail,
  Shield,
  Share2,
  Search,
  TrendingUp,
  FileText,
  Inbox,
  Users,
  Link as LinkIcon,
  BarChart2,
  Globe,
  ShoppingCart,
  UserCheck,
  Cpu,
  Plane,
  Wind,
  Smartphone,
  MessageCircle,
  MapPin,
  PieChart,
  Video,
  Monitor,
  Star,
} from "lucide-react";

const serviceIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  tv: Tv,
  newspaper: Newspaper,
  "layout-dashboard": LayoutDashboard,
  "calendar-days": CalendarDays,
  mail: Mail,
  shield: Shield,
  "share-2": Share2,
  search: Search,
  "trending-up": TrendingUp,
  "file-text": FileText,
  inbox: Inbox,
  users: Users,
  link: LinkIcon,
  "bar-chart-2": BarChart2,
  globe: Globe,
  "shopping-cart": ShoppingCart,
  "user-check": UserCheck,
  cpu: Cpu,
  plane: Plane,
  wind: Wind,
  smartphone: Smartphone,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
  "pie-chart": PieChart,
  video: Video,
  monitor: Monitor,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = serviceIconMap[name] ?? Star;
  return <Icon size={22} className="text-blue-400" />;
}

export function ServicesPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filteredGroups =
    activeFilter === "all"
      ? serviceGroups
      : serviceGroups.filter((g) => g.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#07090f] pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0d1117] to-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-4"
              >
                <span className="text-white">Our </span>
                <span className="text-gradient-blue">Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-slate-400 text-lg max-w-xl leading-relaxed"
              >
                End-to-end marketing solutions to build your brand, grow your
                audience and increase your revenue.
              </motion.p>
            </div>

            {/* Globe icon decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex w-32 h-32 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center glow-blue flex-shrink-0"
              aria-hidden="true"
            >
              <Globe size={52} className="text-blue-400" />
            </motion.div>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2 mt-10"
            role="tablist"
            aria-label="Filter services by category"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service groups */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <AnimatePresence mode="wait">
            {filteredGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                id={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
              >
                {/* Group header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {group.label}
                  </h2>
                  <p className="text-slate-400 text-sm">{group.tagline}</p>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {group.services.map((service, si) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.05 }}
                      className="group relative rounded-2xl bg-[#111827] border border-blue-500/10 hover:border-blue-500/30 p-6 transition-all hover:shadow-lg hover:shadow-blue-500/5 cursor-default"
                    >
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                        <ServiceIcon name={service.icon} />
                      </div>

                      {/* Content */}
                      <h3 className="text-white font-semibold text-sm mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Enquire link */}
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Enquire
                        <ArrowRight size={12} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-950/40 to-[#0f1724] border border-blue-500/20 p-10 text-center">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">Your Growth. Our Strategy.</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Get a customised marketing plan tailored to your goals.
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
              Not sure which services are right for you? Let&apos;s have a conversation
              about your goals, audience, and budget.
            </p>
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold btn-gold"
            >
              Get a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
