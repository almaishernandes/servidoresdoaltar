import { reels as defaultReelsData, videoUrlFromReel, type ReelCategoria } from './reels'

export interface AreaTextOverride {
  titulo: string
  resumo: string
}

export interface ReelContent {
  id: string
  titulo: string
  categoria: ReelCategoria
  autor: string
  duracao: string
  cor: string
  /** Link colado pelo admin: YouTube, YouTube Shorts, Vimeo ou caminho/URL direto de mp4. */
  videoUrl: string
}

export interface SiteContent {
  heroText: string
  footerText: string
  reelsTitle: string
  reelsSubtitle: string
  areas: Record<string, AreaTextOverride>
  reels: ReelContent[]
}

// Mantém o site funcionando mesmo se a consulta ao Supabase falhar.
export const defaultSiteContent: SiteContent = {
  heroText: 'Zelus Domus Tuae Comedite Me',
  footerText: 'Servidores no Altar — Formação, gestão e comunidade a serviço da liturgia',
  reelsTitle: 'Cortes em Destaque',
  reelsSubtitle: 'Momentos curtos da vida dos Servidores do Altar: liturgia, formação e comunidade.',
  areas: {},
  reels: defaultReelsData.map((r) => ({
    id: r.id,
    titulo: r.titulo,
    categoria: r.categoria,
    autor: r.autor,
    duracao: r.duracao,
    cor: r.cor,
    videoUrl: videoUrlFromReel(r),
  })),
}
