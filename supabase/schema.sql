-- Core tables
create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text,
  created_at timestamptz default now()
);

create table if not exists public.athletes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text,
  category text check (category in ('RX+','RX','Performance','Rookie')),
  team_id uuid references public.teams(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists public.wods (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  scoring_type text, -- e.g. time, reps, load
  cap_seconds int,
  release_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid not null references public.athletes(id) on delete cascade,
  wod_id uuid not null references public.wods(id) on delete cascade,
  score_value text not null,
  rank int,
  notes text,
  created_at timestamptz default now(),
  unique(athlete_id, wod_id)
);

-- Enable Row Level Security
alter table public.athletes enable row level security;
alter table public.scores enable row level security;
alter table public.wods enable row level security;
alter table public.teams enable row level security;

-- Policies (Postgres does not support IF NOT EXISTS for CREATE POLICY)
-- Drop then create to make the script idempotent
drop policy if exists p_wods_select_public on public.wods;
create policy p_wods_select_public on public.wods
for select using (true);

drop policy if exists p_teams_select_public on public.teams;
create policy p_teams_select_public on public.teams
for select using (true);

-- Athletes: users can read their row; public can read names (for leaderboards)
drop policy if exists p_athletes_select_public on public.athletes;
create policy p_athletes_select_public on public.athletes
for select using (true);

drop policy if exists p_athletes_update_self on public.athletes;
create policy p_athletes_update_self on public.athletes
for update using (auth.uid() = user_id);

-- Scores: public can read; only service role or judge role can insert/update (set via RPC or serverless)
drop policy if exists p_scores_select_public on public.scores;
create policy p_scores_select_public on public.scores
for select using (true);

-- For writes we will use server-side service key; optionally add role-based checks later
drop policy if exists p_scores_write_deny_all on public.scores;
create policy p_scores_write_deny_all on public.scores
for all to authenticated
using (false) with check (false);


