-- ═══════════════════════════════════════════════════════════════════════════
-- MASIS Database Migration
-- Run this in the Supabase SQL Editor before deploying the application.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── contact_submissions ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name       TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email           TEXT NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  phone           TEXT CHECK (char_length(phone) <= 20),
  service         TEXT CHECK (char_length(service) <= 100),
  message         TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  status          TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for admin queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- ── demo_requests ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS demo_requests (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name       TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  work_email      TEXT NOT NULL CHECK (work_email ~* '^[^@]+@[^@]+\.[^@]+$'),
  company         TEXT NOT NULL CHECK (char_length(company) BETWEEN 1 AND 100),
  phone           TEXT CHECK (char_length(phone) <= 20),
  service         TEXT CHECK (char_length(service) <= 100),
  preferred_date  DATE,
  message         TEXT CHECK (char_length(message) <= 2000),
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_work_email ON demo_requests(work_email);

-- ── updated_at trigger ───────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON demo_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ═══════════════════════════════════════════════════════════════════════════
-- Row Level Security
-- ═══════════════════════════════════════════════════════════════════════════

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- No public read/update/delete access.
-- The service-role key (used server-side only) bypasses RLS by design.
-- If you add an admin dashboard with authenticated users, add policies here:

-- EXAMPLE (admin only):
-- CREATE POLICY "admin_all" ON contact_submissions
--   FOR ALL TO authenticated
--   USING (auth.jwt() ->> 'role' = 'admin');

-- IMPORTANT: Do NOT create a policy that allows anon or authenticated users
-- to read contact_submissions or demo_requests without proper auth checks.
