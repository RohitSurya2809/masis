/**
 * IMPORTANT: Portfolio items are development placeholders only.
 * Set IS_PRODUCTION_CONTENT = true only after the client has reviewed and approved
 * each project entry, including imagery, deliverables, and client attribution.
 *
 * DO NOT display dev fixtures in a production deployment.
 */

export const IS_PRODUCTION_CONTENT = false;

export type ProjectStatus = "Completed" | "Delivered" | "In Progress" | "On Hold";
export type ProjectCategory =
  | "traditional"
  | "digital"
  | "advanced"
  | "production";

export interface Project {
  id: string;
  title: string;
  clientName: string | null; // null if disclosure is not authorised
  thumbnail: string | null;
  category: ProjectCategory;
  description: string;
  deliverables: string[];
  status: ProjectStatus;
  timeline?: string;
  results?: string; // only include verified, approved metrics
  caseStudyUrl?: string;
  isApproved: boolean;
}

// Development fixtures — replace with client-approved projects
export const DEV_FIXTURE_PROJECTS: Project[] = [
  {
    id: "dev-1",
    title: "[Project Title Pending]",
    clientName: null,
    thumbnail: null,
    category: "digital",
    description: "[Awaiting client-approved project description.]",
    deliverables: ["[Deliverable pending]"],
    status: "Completed",
    timeline: "TBC",
    results: undefined,
    isApproved: false,
  },
];

// Production-approved projects (empty until client supplies content)
export const APPROVED_PROJECTS: Project[] = [];

export const projects: Project[] =
  IS_PRODUCTION_CONTENT ? APPROVED_PROJECTS : [];

export const statusColors: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Delivered: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  "In Progress": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "On Hold": "bg-slate-500/20 text-slate-400 border border-slate-500/30",
};

export const categoryLabels: Record<ProjectCategory, string> = {
  traditional: "Traditional",
  digital: "Digital",
  advanced: "Advanced",
  production: "Production",
};
