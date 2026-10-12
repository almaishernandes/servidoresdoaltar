import { supabase } from './supabase'

/** Envia um arquivo (imagem ou vídeo) pro bucket `hub-media` e devolve a URL pública. */
export async function uploadMedia(file: File, pasta: string): Promise<string> {
  const extensao = file.name.split('.').pop() ?? 'bin'
  const caminho = `${pasta}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extensao}`

  const { error } = await supabase.storage.from('hub-media').upload(caminho, file, {
    cacheControl: '3600',
    upsert: false,
  })
  if (error) throw error

  const { data } = supabase.storage.from('hub-media').getPublicUrl(caminho)
  return data.publicUrl
}
