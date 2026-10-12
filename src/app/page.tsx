import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TwoWorldsSection } from "@/components/home/TwoWorldsSection";
import { MarketingDimensionSection } from "@/components/home/MarketingDimensionSection";
import { AdShootsSection } from "@/components/home/AdShootsSection";
import { NewAgeSection } from "@/components/home/NewAgeSection";
import { FeedbackPreview } from "@/components/home/FeedbackPreview";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Marketing Beyond Limits | MASIS",
  description:
    "From local streets to global markets — MASIS creates powerful marketing strategies that connect brands with people, everywhere.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TwoWorldsSection />
      <MarketingDimensionSection />
      <AdShootsSection />
      <NewAgeSection />
      <FeedbackPreview />
      <CtaSection />
    </>
  );
}
