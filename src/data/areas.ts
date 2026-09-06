export interface Area {
  slug: string
  titulo: string
  resumo: string
  icone: string
  cor: string
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
    modelos: [],
    descricao:
      'O ZelusDomus é a plataforma de gestão dos Servidores do Altar: cadastro de coroinhas, acólitos, monitores, cerimoniários e coordenadores, escalas de serviço, atas de reunião, livro caixa e formação — tudo em um só lugar.',
    externalUrl: 'https://zelusdomus.servidoresdoaltar.site/',
    status: 'ativo',
  },
  {
    slug: 'dsa',
    titulo: 'DSA — Desafio dos Servidores do Altar',
    resumo: 'Quiz de formação litúrgica e doutrinal, com trilhas e ranking.',
    icone: '🏆',
    cor: '#b8860b',
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
    modelos: [],
    descricao:
      'Biblioteca de livros e guias para coroinhas, acólitos, monitores, cerimoniários e coordenadores — incluindo o guia de uso do ZelusDomus e futuros materiais de formação litúrgica.',
    externalUrl: 'https://biblioteca.servidoresdoaltar.site',
    status: 'ativo',
  },
  {
    slug: 'formacao-liturgica',
    titulo: 'Formação Litúrgica',
    resumo: 'Material de estudo sobre liturgia, ano litúrgico e ritos.',
    icone: '📖',
    cor: '#3a2f6b',
    modelos: [],
    descricao:
      'Uma área dedicada a materiais de formação sobre liturgia, ano litúrgico, vestes, objetos sacros e o papel de cada função no altar — complementando as trilhas de estudo do DSA.',
    status: 'em-breve',
  },
  {
    slug: 'comunidade',
    titulo: 'Comunidade e Escalas',
    resumo: 'Espaço de integração entre paróquias e grupos de servidores.',
    icone: '🤝',
    cor: '#a3272f',
    modelos: [],
    descricao:
      'Um espaço para conectar grupos de Servidores do Altar de diferentes paróquias, compartilhar experiências, boas práticas de escala e eventos de formação regional.',
    status: 'em-breve',
  },
  {
    slug: 'eventos-igreja-catolica',
    titulo: 'A Igreja Católica',
    resumo: 'Notícias, liturgia diária, rádios, TVs e cursos de formação católica.',
    icone: '🌍',
    cor: '#0f4c81',
    modelos: [],
    descricao:
      'Acompanhe as principais decisões do Vaticano, as celebrações das paróquias locais e as ações sociais da Igreja Católica. Um espaço dedicado à fé, à oração e ao fortalecimento da comunidade cristã no dia a dia.',
    status: 'ativo',
  },
]
