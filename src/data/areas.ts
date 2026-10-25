export interface Area {
  slug: string
  titulo: string
  resumo: string
  icone: string
  cor: string
  imagem: string
  modelos: string[]
  descricao: string
  externalUrl?: string
  status: 'ativo' | 'em-breve'
}

export const areas: Area[] = [
  {
    slug: 'zelusdomus',
    titulo: 'ZelusDomus',
    resumo: 'Plataforma de gestão para grupos de servidores do altar.',
    icone: '🗂️',
    cor: '#8a1c2e',
    imagem: '/areas/zelusdomus.png',
    modelos: [],
    descricao:
      'O ZelusDomus é a plataforma de gestão dos Servidores do Altar: cadastro de coroinhas, acólitos, monitores, cerimoniários e coordenadores, escalas de serviço, atas de reunião, livro caixa e formação — tudo em um só lugar.',
    externalUrl: 'https://zelusdomus.servidoresnoaltar.com.br/',
    status: 'ativo',
  },
  {
    slug: 'dsa',
    titulo: 'DSA — Desafio dos Servidores do Altar',
    resumo: 'Quiz de formação litúrgica e doutrinal, com trilhas e ranking.',
    icone: '🏆',
    cor: '#b8860b',
    imagem: '/areas/dsa.png',
    modelos: [],
    descricao:
      'O DSA transforma a formação litúrgica em um jogo: trilhas de estudo, questões sobre liturgia e doutrina, progresso por níveis e um pódio para os primeiros lugares. Ideal para engajar coroinhas e acólitos no aprendizado.',
    externalUrl: 'https://dsa.servidoresdoaltar.site',
    status: 'ativo',
  },
  {
    slug: 'biblioteca',
    titulo: 'Biblioteca do Altar',
    resumo: 'Livros, guias e materiais de consulta para quem serve ao altar.',
    icone: '📚',
    cor: '#1e5a4a',
    imagem: '/areas/biblioteca.png',
    modelos: [],
    descricao:
      'Biblioteca de livros e guias para coroinhas, acólitos, monitores, cerimoniários e coordenadores — incluindo o guia de uso do ZelusDomus e futuros materiais de formação litúrgica.',
    externalUrl: 'https://biblioteca.servidoresnoaltar.com.br',
    status: 'ativo',
  },
  {
    slug: 'altares',
    titulo: 'Altares',
    resumo: 'Streaming de música sacra, litúrgica e canto gregoriano.',
    icone: '🎵',
    cor: '#d97706',
    imagem: '/areas/altares.png',
    modelos: [],
    descricao:
      'Altares é a plataforma de streaming sob demanda dedicada à música sacra: antífonas, horas litúrgicas, polifonia sacra, missa tridentina e canto gregoriano — com player persistente, letras em latim e português, e playlists pessoais.',
    externalUrl: 'https://altares.servidoresnoaltar.com.br',
    status: 'ativo',
  },
]
