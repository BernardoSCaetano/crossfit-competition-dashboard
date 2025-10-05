// Vercel serverless function: POST to upsert a score
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL as string;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

const supabase = createClient(url, serviceKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Basic admin key check (rotate soon; replace with proper auth when ready)
  if (req.headers['x-admin-key'] !== process.env.ADMIN_WRITE_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { athlete_id, wod_id, score_value, rank, notes } = req.body || {};
    if (!athlete_id || !wod_id || typeof score_value === 'undefined') {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
      .from('scores')
      .upsert({ athlete_id, wod_id, score_value, rank, notes }, { onConflict: 'athlete_id,wod_id' })
      .select('*')
      .single();

    if (error) throw error;
    return res.status(200).json({ ok: true, score: data });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}


