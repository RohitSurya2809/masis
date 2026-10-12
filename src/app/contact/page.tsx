import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MASIS. Send us an enquiry and we'll respond promptly.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
