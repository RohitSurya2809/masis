"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { MasisLogo } from "@/components/ui/MasisLogo";
import { siteConfig } from "@/data/site-config";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Feedback", href: "/feedback" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Traditional Marketing", href: "/services#traditional" },
    { label: "Digital Marketing", href: "/services#digital" },
    { label: "Advanced Marketing", href: "/services#advanced" },
    { label: "Creative Production", href: "/services#production" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    svg: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    svg: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: siteConfig.social.twitter,
    svg: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    svg: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0c14] border-t border-blue-500/10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <MasisLogo />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              From local streets to global markets — we create powerful marketing
              strategies that connect brands with people, everywhere.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm text-slate-400">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-blue-400" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-blue-400" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-400" />
                {siteConfig.contact.address}
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-blue-500/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 MASIS. All rights reserved.</span>
          <span className="text-gradient-blue font-medium">
            Local Roots. Global Vision.
          </span>
        </div>
      </div>
    </footer>
  );
}
