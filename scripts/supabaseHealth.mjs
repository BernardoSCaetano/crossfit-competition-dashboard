import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Try to load .env.local manually if variables are not set
function loadLocalEnv() {
  const p = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, "utf8");
    txt.split(/\r?\n/).forEach((line) => {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m) {
        const k = m[1];
        let v = m[2];
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
        if (!process.env[k]) process.env[k] = v;
      }
    });
  }
}

if (!process.env.SUPABASE_URL && !process.env.REACT_APP_SUPABASE_URL) {
  loadLocalEnv();
}

const url = process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
const anon =
  process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!url || !anon) {
  console.error(
    "Missing env: set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

const supabase = createClient(url, anon);

async function main() {
  const { data, error } = await supabase
    .from("wods")
    .select("id,name")
    .limit(1);
  if (error) {
    console.error("Health check failed:", error.message);
    process.exit(2);
  }
  console.log("Supabase connection OK. Sample wods:", data);
}

main();
