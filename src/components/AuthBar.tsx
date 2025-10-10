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
        <div className="hidden sm:block">
          <span className="text-cf-gray-300 text-sm font-medium">Signed in as</span>
          <span className="text-white text-sm font-semibold ml-1">{user.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link 
            className="px-4 py-2.5 bg-cf-gray-800/50 hover:bg-cf-gray-700/50 text-cf-gray-200 hover:text-white text-sm font-semibold rounded-xl border border-cf-gray-700/50 hover:border-cf-gray-600/50 transition-all duration-300 hover:shadow-cf" 
            to="/me"
          >
            Profile
          </Link>
          <button 
            className="px-4 py-2.5 bg-gradient-to-r from-cf-red to-cf-red-light hover:from-cf-red-light hover:to-cf-red text-white text-sm font-semibold rounded-xl shadow-cf-red transition-all duration-300 hover:shadow-cf-red-lg hover:scale-105" 
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
        className="px-4 py-2.5 bg-cf-gray-800/50 border border-cf-gray-700/50 rounded-xl text-white placeholder-cf-gray-400 focus:outline-none focus:ring-2 focus:ring-cf-red focus:border-cf-red transition-all duration-300 hover:border-cf-gray-600/50"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button 
        className="px-5 py-2.5 bg-gradient-to-r from-cf-red to-cf-red-light hover:from-cf-red-light hover:to-cf-red text-white font-semibold rounded-xl shadow-cf-red transition-all duration-300 hover:shadow-cf-red-lg hover:scale-105" 
        type="submit"
      >
        Send Link
      </button>
      {status && <p className="text-cf-gray-300 text-sm font-medium">{status}</p>}
    </form>
  );
};

export default AuthBar;
