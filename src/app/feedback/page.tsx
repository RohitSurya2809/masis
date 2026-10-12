import type { Metadata } from "next";
import { FeedbackPageContent } from "@/components/feedback/FeedbackPageContent";

export const metadata: Metadata = {
  title: "Client Feedback",
  description:
    "Genuine customer feedback and testimonials from MASIS clients. Real experiences from real people.",
};

export default function FeedbackPage() {
  return <FeedbackPageContent />;
}
