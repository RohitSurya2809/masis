import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work/WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore MASIS's project portfolio. Real projects, accurate statuses, and approved case studies.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
