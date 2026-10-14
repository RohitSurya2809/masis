export type ServiceCategory =
  | "traditional"
  | "digital"
  | "advanced"
  | "production";

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  slug: string;
}

export interface ServiceGroup {
  category: ServiceCategory;
  label: string;
  tagline: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    category: "traditional",
    label: "Traditional Marketing",
    tagline: "Timeless strategies. Lasting impressions.",
    services: [
      {
        id: "tv-radio",
        title: "TV & Radio Ads",
        description:
          "Broadcast campaigns that reach mass audiences with compelling audio-visual storytelling.",
        category: "traditional",
        icon: "tv",
        slug: "tv-radio-ads",
      },
      {
        id: "print-media",
        title: "Print Media",
        description:
          "Newspapers, magazines, and high-quality print collateral that build brand authority.",
        category: "traditional",
        icon: "newspaper",
        slug: "print-media",
      },
      {
        id: "billboards",
        title: "Billboards & Outdoor",
        description:
          "Strategic out-of-home placements that maximize visibility in high-traffic locations.",
        category: "traditional",
        icon: "layout-dashboard",
        slug: "billboards-outdoor",
      },
      {
        id: "events",
        title: "Events & Exhibitions",
        description:
          "End-to-end event management and exhibition design that creates memorable brand experiences.",
        category: "traditional",
        icon: "calendar-days",
        slug: "events-exhibitions",
      },
      {
        id: "direct-marketing",
        title: "Direct Marketing",
        description:
          "Targeted leaflet campaigns, direct mail, and sampling that drive immediate response.",
        category: "traditional",
        icon: "mail",
        slug: "direct-marketing",
      },
      {
        id: "pr",
        title: "PR & Reputation Management",
        description:
          "Proactive media relations and reputation strategies that build and protect your brand.",
        category: "traditional",
        icon: "shield",
        slug: "pr-reputation",
      },
    ],
  },
  {
    category: "digital",
    label: "Digital Marketing",
    tagline: "Smart strategies. Bigger reach.",
    services: [
      {
        id: "social-media",
        title: "Social Media Marketing",
        description:
          "Data-driven social strategies across Instagram, Facebook, LinkedIn, and beyond.",
        category: "digital",
        icon: "share-2",
        slug: "social-media-marketing",
      },
      {
        id: "seo",
        title: "Search Engine Optimisation",
        description:
          "Technical and content SEO that earns lasting organic visibility on Google.",
        category: "digital",
        icon: "search",
        slug: "seo",
      },
      {
        id: "google-ads",
        title: "Google Ads & Paid Campaigns",
        description:
          "Performance-driven paid search, display, and shopping campaigns with measurable ROI.",
        category: "digital",
        icon: "trending-up",
        slug: "google-ads",
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        description:
          "Blogs, videos, and articles that educate your audience and position you as an authority.",
        category: "digital",
        icon: "file-text",
        slug: "content-marketing",
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        description:
          "Segmented email campaigns and automation flows that nurture leads and retain customers.",
        category: "digital",
        icon: "inbox",
        slug: "email-marketing",
      },
      {
        id: "influencer",
        title: "Influencer Marketing",
        description:
          "Authentic influencer partnerships that amplify your brand to engaged, relevant audiences.",
        category: "digital",
        icon: "users",
        slug: "influencer-marketing",
      },
      {
        id: "affiliate",
        title: "Affiliate Marketing",
        description:
          "Performance-based affiliate programs that grow your revenue through trusted partners.",
        category: "digital",
        icon: "link",
        slug: "affiliate-marketing",
      },
      {
        id: "performance",
        title: "Performance Marketing",
        description:
          "Full-funnel campaigns optimised for cost per acquisition and conversion at scale.",
        category: "digital",
        icon: "bar-chart-2",
        slug: "performance-marketing",
      },
      {
        id: "web-dev",
        title: "Website Development",
        description:
          "Fast, conversion-focused websites and landing pages built to reflect your brand.",
        category: "digital",
        icon: "globe",
        slug: "website-development",
      },
      {
        id: "ecommerce",
        title: "E-commerce Marketing",
        description:
          "End-to-end e-commerce strategy, catalogue management, and marketplace optimisation.",
        category: "digital",
        icon: "shopping-cart",
        slug: "ecommerce-marketing",
      },
      {
        id: "personal-branding",
        title: "Personal Branding",
        description:
          "Build a distinctive personal brand that opens doors and amplifies your expertise.",
        category: "digital",
        icon: "user-check",
        slug: "personal-branding",
      },
      {
        id: "website-creation",
        title: "Website Creation",
        description:
          "Modern, responsive websites designed to build your brand, engage your audience, and turn visitors into customers.",
        category: "digital",
        icon: "monitor",
        slug: "website-creation",
      },
    ],
  },
  {
    category: "advanced",
    label: "Advanced & Innovative Marketing",
    tagline: "Next-gen tools. Real-world impact.",
    services: [
      {
        id: "ai-marketing",
        title: "AI Marketing",
        description:
          "Harness artificial intelligence for hyper-personalisation, automation, and predictive analytics.",
        category: "advanced",
        icon: "cpu",
        slug: "ai-marketing",
      },
      {
        id: "drone-marketing",
        title: "Drone Marketing",
        description:
          "Stunning aerial cinematography and drone light shows that make your brand impossible to ignore.",
        category: "advanced",
        icon: "plane",
        slug: "drone-marketing",
      },
      {
        id: "balloon-branding",
        title: "Balloon Branding",
        description:
          "Eye-catching hot-air balloon and branded balloon activations for outdoor events.",
        category: "advanced",
        icon: "wind",
        slug: "balloon-branding",
      },
      {
        id: "app-marketing",
        title: "App Marketing",
        description:
          "App store optimisation, user acquisition campaigns, and retention strategies for mobile.",
        category: "advanced",
        icon: "smartphone",
        slug: "app-marketing",
      },
      {
        id: "whatsapp-marketing",
        title: "WhatsApp Marketing",
        description:
          "Conversational campaigns and broadcast messaging that drive engagement on WhatsApp Business.",
        category: "advanced",
        icon: "message-circle",
        slug: "whatsapp-marketing",
      },
      {
        id: "international",
        title: "International Marketing",
        description:
          "Cross-border campaign localisation and global market entry strategies.",
        category: "advanced",
        icon: "map-pin",
        slug: "international-marketing",
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description:
          "Custom dashboards and data-driven insights that turn marketing metrics into growth decisions.",
        category: "advanced",
        icon: "pie-chart",
        slug: "analytics-reporting",
      },
      {
        id: "creative-production",
        title: "Creative Production",
        description:
          "Professional ad shoots, motion graphics, and creative assets that elevate your brand visuals.",
        category: "advanced",
        icon: "video",
        slug: "creative-production",
      },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);

export const categoryLabels: Record<ServiceCategory, string> = {
  traditional: "Traditional",
  digital: "Digital",
  advanced: "AI & New Tech",
  production: "Production",
};
