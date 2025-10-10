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
      <div className="flex items-center space-x-4">
        <span className="text-white/80 text-sm">Signed in as {user.email}</span>
        <div className="flex items-center space-x-2">
          <Link 
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200" 
            to="/me"
          >
            Profile
          </Link>
          <button 
            className="px-4 py-2 bg-cf-red hover:bg-cf-red-dark text-white text-sm font-medium rounded-lg transition-all duration-200" 
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={signIn} className="flex items-center space-x-3">
      <input
        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cf-red focus:border-transparent"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button 
        className="px-4 py-2 bg-cf-red hover:bg-cf-red-dark text-white font-medium rounded-lg transition-all duration-200 hover:scale-105" 
        type="submit"
      >
        Send Link
      </button>
      {status && <p className="text-white/80 text-sm">{status}</p>}
    </form>
  );
};

export default AuthBar;
