import React, { useEffect, useState } from "react";
import { useClaimAthlete } from "../hooks/useClaimAthlete";
import { supabase } from "../lib/supabaseClient";

type Athlete = {
  id: string;
  name: string;
  email: string;
  category: string | null;
  team_id: string | null;
};

const Profile: React.FC = () => {
  useClaimAthlete();
  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        setLoading(false);
        return;
      }

      // First try by user_id
      let { data: row } = await supabase
        .from("athletes")
        .select("id,name,email,category,team_id,user_id")
        .eq("user_id", data.user.id)
        .limit(1)
        .maybeSingle();

      // If none, try to claim by email and re-fetch
      if (!row) {
        await supabase.rpc("claim_athlete_profile");
        // re-fetch by user_id
        const r1 = await supabase
          .from("athletes")
          .select("id,name,email,category,team_id,user_id")
          .eq("user_id", data.user.id)
          .limit(1)
          .maybeSingle();
        row = r1.data as any;
      }

      // Still none? Try by email (unclaimed profile present)
      if (!row && data.user.email) {
        const r2 = await supabase
          .from("athletes")
          .select("id,name,email,category,team_id,user_id")
          .ilike("email", data.user.email)
          .limit(1)
          .maybeSingle();
        row = r2.data as any;
      }

      setAthlete(row as any);
      setLoading(false);
    })();
  }, []);

  const claimNow = async () => {
    setStatus("Linking profile...");
    await supabase.rpc("claim_athlete_profile");
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setStatus("Not signed in");
      return;
    }
    const r1 = await supabase
      .from("athletes")
      .select("id,name,email,category,team_id,user_id")
      .eq("user_id", data.user.id)
      .limit(1)
      .maybeSingle();
    setAthlete(r1.data as any);
    setStatus(r1.data ? "Linked!" : "No profile found for your email");
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!athlete) return;
    setStatus("Saving...");
    const { error } = await supabase
      .from("athletes")
      .update({ name: athlete.name, category: athlete.category })
      .eq("id", athlete.id);
    setStatus(error ? `Error: ${error.message}` : "Saved!");
  };

  if (loading) {
    return (
      <section className="dashboard-section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Profile</h2>
            <p className="section-subtitle">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!athlete) {
    return (
      <section className="dashboard-section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Profile</h2>
            <p className="section-subtitle">
              Sign in to manage your athlete profile.
            </p>
          </div>
          <div className="alert alert-warning">
            No profile found. If you just signed in, try refreshing.
          </div>
          <div style={{ marginTop: 12 }}>
            <button className="btn btn-secondary" onClick={claimNow}>
              Claim now
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-section section-black">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-header">
          <h2 className="section-title">My Profile</h2>
          <p className="section-subtitle">
            Only you can edit your own profile.
          </p>
        </div>

        <form onSubmit={save} className="registration-form">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            value={athlete.name}
            onChange={(e) =>
              setAthlete({ ...(athlete as Athlete), name: e.target.value })
            }
          />

          <label className="form-label" style={{ marginTop: 12 }}>
            Category
          </label>
          <input
            className="form-input"
            value={athlete.category ?? ""}
            onChange={(e) =>
              setAthlete({ ...(athlete as Athlete), category: e.target.value })
            }
          />

          <div style={{ marginTop: 12 }}>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
          {status && <p style={{ marginTop: 8 }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Profile;
