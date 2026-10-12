import type { Metadata } from "next";
import { DemoPageContent } from "@/components/demo/DemoPageContent";

export const metadata: Metadata = {
  title: "Get a Demo",
  description:
    "Request a personalised discussion or demonstration of MASIS marketing services.",
};

export default function DemoPage() {
  return <DemoPageContent />;
}
