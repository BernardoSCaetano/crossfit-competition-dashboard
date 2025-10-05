// Vercel serverless function: POST to upsert a score
import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const url = process.env.SUPABASE_URL as string;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

const supabase = createClient(url, serviceKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  // Prefer Supabase JWT (Authorization: Bearer) over header secret if provided
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  try {
    if (!token) {
      // Fallback temporary header-based key (staging only)
      if (req.headers["x-admin-key"] !== process.env.ADMIN_WRITE_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      // Verify token and judge membership using supabase service client
      const { data: userData, error: userErr } = await supabase.auth.getUser(token);
      if (userErr || !userData.user) return res.status(401).json({ error: "Invalid token" });
      const { data: judge } = await supabase.from('judges').select('user_id').eq('user_id', userData.user.id).single();
      if (!judge) return res.status(403).json({ error: 'Not a judge' });
    }

    const { athlete_id, wod_id, score_value, rank, notes } = req.body || {};
    if (!athlete_id || !wod_id || typeof score_value === "undefined") {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from("scores")
      .upsert(
        { athlete_id, wod_id, score_value, rank, notes },
        { onConflict: "athlete_id,wod_id" }
      )
      .select("*")
      .single();

    if (error) throw error;
    return res.status(200).json({ ok: true, score: data });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
