import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const AuthBar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string>("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setUser(s?.user ?? null);
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending magic link...");
    const redirectTo = `${window.location.origin}`; // works for Vercel previews and prod
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });
    setStatus(
      error ? `Error: ${error.message}` : "Check your email for the link."
    );
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return (
      <div className="auth-user-bar" style={{ marginTop: 12 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span>Signed in as {user.email}</span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link className="btn btn-secondary" to="/me">
              Profile
            </Link>
            <button className="btn btn-secondary" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={signIn}
      className="registration-form"
      style={{ marginTop: 12 }}
    >
      <label className="form-label">Sign in (magic link)</label>
      <input
        className="form-input"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div style={{ marginTop: 8 }}>
        <button className="btn btn-primary" type="submit">
          Send Link
        </button>
      </div>
      {status && <p style={{ marginTop: 8 }}>{status}</p>}
    </form>
  );
};

export default AuthBar;
