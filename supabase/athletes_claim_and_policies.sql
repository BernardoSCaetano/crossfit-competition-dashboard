-- Unique constraints
create unique index if not exists uq_athletes_email on public.athletes(lower(email));
create unique index if not exists uq_athletes_user_id on public.athletes(user_id) where user_id is not null;

-- RLS for athletes: owner can update self; public can select
drop policy if exists p_athletes_update_self on public.athletes;
create policy p_athletes_update_self on public.athletes
for update to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

-- Claim function: link current auth user to athlete row by email if unclaimed
create or replace function public.claim_athlete_profile()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text;
  v_uid uuid := auth.uid();
begin
  select email into v_email from auth.users where id = v_uid;
  if v_email is null then return; end if;
  update public.athletes
     set user_id = v_uid
   where lower(email) = lower(v_email) and user_id is null;
end;
$$;

-- Ensure authenticated can execute the claim RPC
grant execute on function public.claim_athlete_profile() to authenticated;

-- Optionally, call from client via RPC (post-auth) or as a trigger after login using edge function


