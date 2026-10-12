-- Rode no SQL Editor do projeto Supabase geuxryaynpczkfqyfxkb.
-- Define uma senha fixa para o usuário do admin, sem precisar de
-- confirmação por e-mail ou magic link.
--
-- Troque 'TROQUE_AQUI_A_SENHA' pela senha que você quer usar
-- (pelo menos 6 caracteres) antes de rodar.

update auth.users
set
  encrypted_password = crypt('TROQUE_AQUI_A_SENHA', gen_salt('bf')),
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  updated_at = now()
where email = 'almaishernandes@gmail.com';
