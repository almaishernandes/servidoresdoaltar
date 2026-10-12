export type ReelCategoria = 'ZelusDomus' | 'DSA' | 'Biblioteca' | 'Altares' | 'Igreja Católica'

export interface Reel {
  id: string
  titulo: string
  categoria: ReelCategoria
  autor: string
  duracao: string
  cor: string
  /** 'mp4' toca direto via <video>; os demais embutem via iframe usando o ID do vídeo (não a URL inteira) */
  videoType: 'mp4' | 'youtube' | 'vimeo' | 'instagram'
  /**
   * mp4: caminho do arquivo (ex: '/videos/reels/missa-01.mp4')
   * youtube: apenas o ID do Short (ex: 'dQw4w9WgXcQ', de youtube.com/shorts/dQw4w9WgXcQ)
   * vimeo: apenas o ID numérico do vídeo (ex: '824804225')
   * instagram: 'p/<shortcode>' ou 'reel/<shortcode>' (ex: 'p/Dcn7GuuxFW')
   */
  videoSrc: string
  /** Opcional: caminho de imagem 9:16. Sem isso, usa um fundo gerado. */
  thumbnail?: string
}

export const reelCategorias: ReelCategoria[] = [
  'ZelusDomus',
  'DSA',
  'Biblioteca',
  'Altares',
  'Igreja Católica',
]

/**
 * Recebe um link colado pelo admin (YouTube, YouTube Shorts, Vimeo, Instagram ou
 * link/caminho direto de mp4) e devolve o videoType + videoSrc que o player espera.
 */
export function resolveVideoUrl(url: string): { videoType: Reel['videoType']; videoSrc: string } {
  const trimmed = url.trim()

  const youtubeMatch = trimmed.match(
    /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{6,})/
  )
  if (youtubeMatch) {
    return { videoType: 'youtube', videoSrc: youtubeMatch[1] }
  }

  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) {
    return { videoType: 'vimeo', videoSrc: vimeoMatch[1] }
  }

  const instagramMatch = trimmed.match(/instagram\.com\/(p|reel|reels|tv)\/([a-zA-Z0-9_-]+)/)
  if (instagramMatch) {
    const kind = instagramMatch[1] === 'reels' ? 'reel' : instagramMatch[1]
    return { videoType: 'instagram', videoSrc: `${kind}/${instagramMatch[2]}` }
  }

  return { videoType: 'mp4', videoSrc: trimmed }
}

/** Reconstrói o link "cru" a partir de videoType/videoSrc, para exibir no campo do admin. */
export function videoUrlFromReel(reel: { videoType: Reel['videoType']; videoSrc: string }): string {
  if (reel.videoType === 'youtube') return `https://youtube.com/shorts/${reel.videoSrc}`
  if (reel.videoType === 'vimeo') return `https://vimeo.com/${reel.videoSrc}`
  if (reel.videoType === 'instagram') return `https://www.instagram.com/${reel.videoSrc}/`
  return reel.videoSrc
}

// PLACEHOLDER: cole o link real do corte de cada projeto em /admin (seção "Vídeos dos cortes").
// Enquanto videoSrc estiver vazio, o corte não aparece no site.
export const reels: Reel[] = [
  {
    id: 'zelusdomus',
    titulo: 'ZelusDomus',
    categoria: 'ZelusDomus',
    autor: 'Servidores no Altar',
    duracao: '0:00',
    cor: '#8a1c2e',
    videoType: 'mp4',
    videoSrc: '',
  },
  {
    id: 'dsa',
    titulo: 'DSA — Desafio dos Servidores do Altar',
    categoria: 'DSA',
    autor: 'Servidores no Altar',
    duracao: '0:00',
    cor: '#b8860b',
    videoType: 'mp4',
    videoSrc: '',
  },
  {
    id: 'biblioteca',
    titulo: 'Biblioteca do Altar',
    categoria: 'Biblioteca',
    autor: 'Servidores no Altar',
    duracao: '0:00',
    cor: '#1e5a4a',
    videoType: 'mp4',
    videoSrc: '',
  },
  {
    id: 'altares',
    titulo: 'Altares',
    categoria: 'Altares',
    autor: 'Servidores no Altar',
    duracao: '0:00',
    cor: '#d97706',
    videoType: 'mp4',
    videoSrc: '',
  },
  {
    id: 'igreja-catolica',
    titulo: 'A Igreja Católica',
    categoria: 'Igreja Católica',
    autor: 'Servidores no Altar',
    duracao: '0:00',
    cor: '#0f4c81',
    videoType: 'mp4',
    videoSrc: '',
  },
]
