-- Rode isso no SQL Editor do projeto Supabase geuxryaynpczkfqyfxkb
-- (o mesmo usado pelo ZelusDomus), pra criar a tabela de conteúdo
-- editável do hub servidoresnoaltar.com.br (editado via /admin).

create table if not exists public.hub_site_content (
  id text primary key default 'main',
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.hub_site_content enable row level security;

-- Qualquer visitante do hub precisa conseguir ler o conteúdo (Home, Footer etc).
create policy "hub_site_content_public_read"
  on public.hub_site_content for select
  using (true);

-- Só usuário autenticado (login no /admin) pode editar.
create policy "hub_site_content_authenticated_update"
  on public.hub_site_content for update
  to authenticated
  using (true)
  with check (true);

create policy "hub_site_content_authenticated_insert"
  on public.hub_site_content for insert
  to authenticated
  with check (true);

insert into public.hub_site_content (id, data)
values ('main', '{
  "heroText": "Zelus Domus Tuae Comedite Me",
  "footerText": "Servidores no Altar — Formação, gestão e comunidade a serviço da liturgia",
  "reelsTitle": "Cortes em Destaque",
  "reelsSubtitle": "Momentos curtos da vida dos Servidores do Altar: liturgia, formação e comunidade.",
  "areas": {},
  "reels": [
    { "id": "zelusdomus", "titulo": "ZelusDomus", "categoria": "ZelusDomus", "autor": "Servidores no Altar", "duracao": "0:00", "cor": "#8a1c2e", "videoUrl": "" },
    { "id": "dsa", "titulo": "DSA — Desafio dos Servidores do Altar", "categoria": "DSA", "autor": "Servidores no Altar", "duracao": "0:00", "cor": "#b8860b", "videoUrl": "" },
    { "id": "biblioteca", "titulo": "Biblioteca do Altar", "categoria": "Biblioteca", "autor": "Servidores no Altar", "duracao": "0:00", "cor": "#1e5a4a", "videoUrl": "" },
    { "id": "altares", "titulo": "Altares", "categoria": "Altares", "autor": "Servidores no Altar", "duracao": "0:00", "cor": "#d97706", "videoUrl": "" },
    { "id": "igreja-catolica", "titulo": "A Igreja Católica", "categoria": "Igreja Católica", "autor": "Servidores no Altar", "duracao": "0:00", "cor": "#0f4c81", "videoUrl": "" }
  ]
}'::jsonb)
on conflict (id) do nothing;

-- Depois de rodar isso, crie um usuário de login em:
-- Authentication → Users → Add user (e-mail + senha)
-- Esse usuário poderá entrar em servidoresnoaltar.com.br/admin
