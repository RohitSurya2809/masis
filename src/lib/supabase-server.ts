import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client using the service-role key.
// This must NEVER be imported in client components.
// The service role key is only available server-side via environment variables.
function createServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase environment variables are not configured. " +
        "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file."
    );
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export { createServerClient };
