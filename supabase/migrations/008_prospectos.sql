-- 008 · prospectos
-- ------------------------------------------------------------
-- CRM básico de Wine Box Vide.
-- Cada usuario solo puede ver y administrar sus propios prospectos.
-- ============================================================

create table if not exists public.prospectos (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  nombre_negocio text not null,
  contacto    text,
  telefono    text,
  estatus     text not null default 'nuevo',
  notas       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

comment on table public.prospectos is
  'Prospectos B2B de Wine Box Vide.';

create index if not exists prospectos_user_id_idx
  on public.prospectos (user_id, created_at desc);

drop trigger if exists prospectos_set_updated_at on public.prospectos;

create trigger prospectos_set_updated_at
  before update on public.prospectos
  for each row execute function public.set_updated_at();

-- Seguridad RLS
alter table public.prospectos enable row level security;

drop policy if exists "prospectos_select_own" on public.prospectos;
create policy "prospectos_select_own"
  on public.prospectos for select
  using (auth.uid() = user_id);

drop policy if exists "prospectos_insert_own" on public.prospectos;
create policy "prospectos_insert_own"
  on public.prospectos for insert
  with check (auth.uid() = user_id);

drop policy if exists "prospectos_update_own" on public.prospectos;
create policy "prospectos_update_own"
  on public.prospectos for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "prospectos_delete_own" on public.prospectos;
create policy "prospectos_delete_own"
  on public.prospectos for delete
  using (auth.uid() = user_id);