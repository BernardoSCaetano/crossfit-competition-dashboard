import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export function useClaimAthlete() {
  useEffect(() => {
    // When user signs in, attempt to claim the athlete row by email
    const run = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      // RPC function links auth.uid() to athletes.user_id where emails match and user_id is null
      await supabase.rpc("claim_athlete_profile");
    };
    run();
  }, []);
}
