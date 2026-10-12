/**
 * IMPORTANT: These are development fixture data only.
 * In production, replace with genuine, approved customer testimonials.
 * Set IS_PRODUCTION_CONTENT = true only after the client has reviewed and approved
 * each testimonial, photograph, and attribution.
 *
 * DO NOT display dev fixtures in a production deployment.
 */

export const IS_PRODUCTION_CONTENT = false;

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  avatar: string | null;
  review: string;
  rating: number; // 1-5
  service?: string;
  isApproved: boolean;
}

// ─────────────────────────────────────────────────
// Development fixtures — NOT for production display
// Replace every item below with approved client content
// ─────────────────────────────────────────────────
export const DEV_FIXTURE_TESTIMONIALS: Testimonial[] = [
  {
    id: "dev-1",
    name: "[Client Name Pending]",
    designation: "[Title Pending]",
    company: "[Company Pending]",
    avatar: null,
    review:
      "[Awaiting approved testimonial from client. This placeholder must not appear in production.]",
    rating: 5,
    service: "Digital Marketing",
    isApproved: false,
  },
];

// Production-approved testimonials (empty until client supplies content)
export const APPROVED_TESTIMONIALS: Testimonial[] = [];

// Exported list respects environment
export const testimonials: Testimonial[] =
  IS_PRODUCTION_CONTENT ? APPROVED_TESTIMONIALS : [];
