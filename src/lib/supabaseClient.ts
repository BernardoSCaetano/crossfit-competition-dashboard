import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY as
  | string
  | undefined;

let supabaseInstance: SupabaseClient | null = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  // In test environments without env, provide a noop client mock to avoid crashes
  // Only minimal methods used in tests are mocked; adapters are separately mocked
  supabaseInstance = {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null } as any),
      onAuthStateChange: () =>
        ({ data: { subscription: { unsubscribe() {} } } } as any),
      signInWithOtp: async () => ({ data: {}, error: null } as any),
      signOut: async () => ({ error: null } as any),
    },
  } as unknown as SupabaseClient;
}

export const supabase = supabaseInstance as SupabaseClient;
