import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end marketing solutions to build your brand, grow your audience and increase your revenue. Traditional, Digital, and Advanced marketing under one roof.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
