import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useClaimAthlete } from "../hooks/useClaimAthlete";

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
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      const { data: rows } = await supabase
        .from("athletes")
        .select("id,name,email,category,team_id,user_id")
        .eq("user_id", data.user.id)
        .limit(1)
        .maybeSingle();
      setAthlete(rows as any);
    })();
  }, []);

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

  if (!athlete) {
    return (
      <section className="dashboard-section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Profile</h2>
            <p className="section-subtitle">Sign in to manage your athlete profile.</p>
          </div>
          <div className="alert alert-warning">No profile found. If you just signed in, try refreshing.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-section section-black">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-header">
          <h2 className="section-title">My Profile</h2>
          <p className="section-subtitle">Only you can edit your own profile.</p>
        </div>

        <form onSubmit={save} className="registration-form">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            value={athlete.name}
            onChange={(e) => setAthlete({ ...(athlete as Athlete), name: e.target.value })}
          />

          <label className="form-label" style={{ marginTop: 12 }}>Category</label>
          <input
            className="form-input"
            value={athlete.category ?? ""}
            onChange={(e) => setAthlete({ ...(athlete as Athlete), category: e.target.value })}
          />

          <div style={{ marginTop: 12 }}>
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
          {status && <p style={{ marginTop: 8 }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Profile;


