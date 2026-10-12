# MASIS — Premium Digital Marketing Agency Website

Complete production-ready website built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Supabase PostgreSQL, and transactional email capabilities.

---

## 1. Project Overview

- **Brand:** MASIS
- **Tagline:** *Marketing Beyond Limits*
- **Aesthetic:** Near-black (`#07090f`) & midnight-navy backgrounds, deep blue panels, electric-blue accents, warm gold CTA highlights, and crisp typography matching the reference design.
- **Directory:** `d:\masis\masis-web`

---

## 2. Implemented Routes & Navigation

All 7 required navigation items are implemented with active states and responsive mobile drawers:

1. **`/` (Home):**
   - Hero: "Marketing Beyond Limits", value proposition, primary CTA ("Explore Our Services") & secondary CTA ("Get in Touch").
   - Stats Bar: Verified statistics loaded from centralized configuration.
   - Two Worlds: Traditional Marketing + Digital Marketing overview with distinct thematic panels.
   - Marketing in Every Dimension: Comprehensive category grid with interactive cards.
   - Ad Shoots & Video Dimension: Creative production preview with capability highlights.
   - New-Age Marketing: AI, Drone, Balloon branding, WhatsApp, App, and International marketing showcase.
   - Client Voices / Feedback Preview: Honest empty state awaiting approved testimonials.
   - Final Project Enquiry CTA banner.
2. **`/services` (Services):**
   - Categorized by Traditional, Digital, and Advanced & Innovative Marketing.
   - Interactive category filtering tabs ("All", "Traditional", "Digital", "AI & New Tech").
   - Reusable cards with dedicated "Enquire" links pre-populating the contact form.
3. **`/about` (About MASIS):**
   - "We Turn Ideas into Impact" narrative.
   - Our Story & marketing philosophy.
   - Mission & Vision dual cards.
   - Why Choose MASIS: 5 key core agency strengths.
4. **`/feedback` (Feedback):**
   - Replaces generic solutions with authentic, attributable customer reviews.
   - Strictly separates development fixtures from production with `IS_PRODUCTION_CONTENT` guard.
   - Renders a clean trust badge and empty state until genuine client reviews are provided.
5. **`/work` (Work / Portfolio):**
   - Credibility-first portfolio architecture.
   - Filterable by status (`Completed`, `Delivered`, `In Progress`, `On Hold`) and category.
   - Clear distinction between "Completed" (work finished) and "Delivered" (client handover).
   - Informative empty state with content guide when waiting for approved case studies.
6. **`/contact` (Contact):**
   - Phone (`+91 93441 54781`), Email (`hello@masis.in`), Office (`Chennai, India`), WhatsApp direct chat link.
   - React Hook Form + Zod server validation.
   - Supabase `contact_submissions` table persistence and Resend transactional email alert.
7. **`/get-a-demo` (Get a Demo):**
   - Dedicated demonstration request workflow.
   - Clear disclaimer that requests are confirmed by the team (not automated instant booking).
   - Persists to Supabase `demo_requests` table with rate limiting and email dispatch.

---

## 3. Technology Stack & Architecture

- **Framework:** Next.js 16.4 (App Router, Turbopack, React 19)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React & inline brand SVGs
- **Validation:** Zod 4 schemas on both client and route handlers
- **Forms:** React Hook Form with `@hookform/resolvers/zod`
- **Database & Security:** Supabase PostgreSQL with Row Level Security (RLS)
- **Email:** Resend transactional email integration with graceful offline fallbacks
- **SEO & Performance:** Fully static prerendering for content pages, dynamic sitemap (`/sitemap.xml`), and robots configuration (`/robots.txt`).

---

## 4. Database Setup & Migrations

The SQL migration file is located at:
`supabase/migrations/001_initial.sql`

It provisions:
- `contact_submissions`: Stores name, email, phone, service, message, status (`new`, `read`, `replied`, `archived`), and timestamps with automated `updated_at` trigger.
- `demo_requests`: Stores name, work email, company, phone, service, preferred date, message, status (`pending`, `contacted`, `scheduled`, `completed`, `cancelled`), and timestamps.
- **Row Level Security (RLS):** Enabled on both tables. Public anonymous access is denied; only privileged server operations via `SUPABASE_SERVICE_ROLE_KEY` or authenticated admin policies can interact with the data.

---

## 5. Environment Variables & Deployment

A template is provided in `.env.example`:

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Transactional Email (Resend)
RESEND_API_KEY=re_your_api_key_here
NOTIFY_EMAIL=hello@masis.in

# Site URL
NEXT_PUBLIC_SITE_URL=https://masis.in
```

### Running Locally

```bash
cd d:\masis\masis-web
npm run dev
```

### Building for Production

```bash
cd d:\masis\masis-web
npm run build
npm run start
```
