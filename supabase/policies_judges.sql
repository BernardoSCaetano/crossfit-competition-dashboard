-- Judges table and policies
create table if not exists public.judges (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

alter table public.judges enable row level security;

-- allow authenticated users to see if they are a judge (their own row)
create policy if not exists p_judges_select_self on public.judges
for select using (auth.uid() = user_id);

-- scores write policy for judges (optional if using serverless with service key)
create policy if not exists p_scores_write_judges on public.scores
for insert to authenticated
with check (exists(select 1 from public.judges j where j.user_id = auth.uid()));

create policy if not exists p_scores_update_judges on public.scores
for update to authenticated
using (exists(select 1 from public.judges j where j.user_id = auth.uid()))
with check (exists(select 1 from public.judges j where j.user_id = auth.uid()));


