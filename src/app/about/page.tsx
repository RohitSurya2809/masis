import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About MASIS",
  description:
    "MASIS is a full-service digital and traditional marketing agency. Learn about our story, mission, and what drives us to help brands grow.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
