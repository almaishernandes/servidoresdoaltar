-- Rode no SQL Editor do projeto Supabase geuxryaynpczkfqyfxkb.
-- Cria o bucket de armazenamento onde o /admin guarda as imagens dos
-- cards e os vídeos/capas dos cortes enviados direto pelo painel.

insert into storage.buckets (id, name, public)
values ('hub-media', 'hub-media', true)
on conflict (id) do nothing;

-- Qualquer visitante do hub precisa conseguir ver as imagens/vídeos.
create policy "hub_media_public_read"
  on storage.objects for select
  using (bucket_id = 'hub-media');

-- Só usuário autenticado (login no /admin) pode enviar/trocar/remover arquivos.
create policy "hub_media_authenticated_insert"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'hub-media');

create policy "hub_media_authenticated_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'hub-media');

create policy "hub_media_authenticated_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'hub-media');
