import { supabase } from "../lib/supabaseClient";
import type { Athlete as MockAthlete, Wod as MockWod } from "./mock";

export async function fetchWods(): Promise<MockWod[]> {
  const { data, error } = await supabase.from("wods").select("id,name,description,scoring_type,cap_seconds");
  if (error) throw error;
  return (data ?? []).map((w: any) => ({
    id: w.id,
    name: w.name,
    description: w.description ?? "",
    movements: [],
  }));
}

export async function fetchAthletes(): Promise<MockAthlete[]> {
  const { data, error } = await supabase.from("athletes").select("id,name,category,team_id");
  if (error) throw error;
  return (data ?? []).map((a: any) => ({
    id: a.id,
    name: a.name,
    category: a.category,
    team: a.team_id ?? undefined,
    scores: {},
  }));
}


