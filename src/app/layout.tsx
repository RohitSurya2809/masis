import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masis.in"),
  title: {
    default: "MASIS — Marketing Beyond Limits",
    template: "%s | MASIS",
  },
  description:
    "MASIS is a full-service digital and traditional marketing agency helping brands grow, connect and lead in today's fast-changing world.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "traditional marketing",
    "Chennai",
    "India",
    "brand strategy",
    "SEO",
    "social media marketing",
  ],
  authors: [{ name: "MASIS" }],
  creator: "MASIS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://masis.in",
    siteName: "MASIS",
    title: "MASIS — Marketing Beyond Limits",
    description:
      "From local streets to global markets — we create powerful marketing strategies that connect brands with people, everywhere.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MASIS — Marketing Beyond Limits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MASIS — Marketing Beyond Limits",
    description:
      "Full-service digital and traditional marketing agency. Chennai, India.",
    images: ["/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#07090f] text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
