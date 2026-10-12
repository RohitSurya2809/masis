"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Filter, AlertCircle } from "lucide-react";
import { projects, statusColors, categoryLabels, type ProjectStatus, type ProjectCategory } from "@/data/projects";

type StatusFilter = "all" | ProjectStatus;
type CategoryFilter = "all" | ProjectCategory;

const statusOptions: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All Statuses" },
  { id: "Completed", label: "Completed" },
  { id: "Delivered", label: "Delivered" },
  { id: "In Progress", label: "In Progress" },
  { id: "On Hold", label: "On Hold" },
];

const categoryOptions: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Categories" },
  { id: "traditional", label: "Traditional" },
  { id: "digital", label: "Digital" },
  { id: "advanced", label: "Advanced" },
  { id: "production", label: "Production" },
];

export function WorkPageContent() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const filtered = projects.filter((p) => {
    const statusMatch = statusFilter === "all" || p.status === statusFilter;
    const categoryMatch = categoryFilter === "all" || p.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-[#07090f] pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#0d1117] to-[#07090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Work</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              A smaller portfolio with accurate statuses and real deliverables is more
              valuable than an impressive-looking gallery of invented projects.
            </p>
          </motion.div>

          {/* Status legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {statusOptions.slice(1).map((s) => (
              <span
                key={s.id}
                className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[s.id as ProjectStatus]}`}
              >
                {s.label}
              </span>
            ))}
            <div className="ml-2 text-xs text-slate-500 self-center">
              <span className="text-slate-400 font-medium">Completed</span> = project work done;{" "}
              <span className="text-slate-400 font-medium">Delivered</span> = handed to client
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-[#07090f]/95 backdrop-blur-md border-b border-blue-500/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-center">
          <Filter size={14} className="text-slate-500" />
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setStatusFilter(opt.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  statusFilter === opt.id
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setCategoryFilter(opt.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  categoryFilter === opt.id
                    ? "bg-amber-500/80 text-black"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            /* Empty state — no projects supplied yet */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-blue-500/10 bg-[#0d1117] p-16 text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                <Briefcase size={24} className="text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Portfolio Coming Soon
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm max-w-md mx-auto">
                We only display approved projects with accurate details. Our portfolio
                is being prepared with the client&apos;s input to ensure every project
                shown is genuine and accurately represented.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 inline-flex items-start gap-3 text-left max-w-md">
                <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-300/80">
                  To add real projects, update{" "}
                  <code className="font-mono text-amber-400">src/data/projects.ts</code>{" "}
                  with approved content and set{" "}
                  <code className="font-mono text-amber-400">IS_PRODUCTION_CONTENT = true</code>.
                </p>
              </div>
            </motion.div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No projects match the selected filters.
            </div>
          ) : (
            <AnimatePresence>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="rounded-2xl bg-[#111827] border border-blue-500/10 hover:border-blue-500/25 overflow-hidden group transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative bg-[#0d1117] flex items-center justify-center border-b border-blue-500/10 overflow-hidden">
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} thumbnail`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-slate-600">
                          <Briefcase size={32} />
                          <span className="text-xs">Image pending</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      {/* Status + category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                        <span className="text-xs text-slate-500">
                          {categoryLabels[project.category]}
                        </span>
                      </div>

                      <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                      {project.clientName && (
                        <p className="text-blue-400 text-xs mb-3">{project.clientName}</p>
                      )}
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Deliverables */}
                      {project.deliverables.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.deliverables.map((d) => (
                            <span
                              key={d}
                              className="text-xs text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.results && (
                        <div className="mt-4 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                          <p className="text-xs text-green-400">{project.results}</p>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}
