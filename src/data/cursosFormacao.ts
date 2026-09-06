export interface LinkExterno {
  nome: string
  descricao: string
  url: string
  icone: string
}

export const cursosFormacao: LinkExterno[] = [
  {
    nome: 'Santuário São Judas Tadeu — Formação a Distância',
    descricao: 'Cursos preparatórios online, incluindo formação para coroinhas, acólitos e cerimoniais.',
    url: 'https://saojudas.org.br/ead',
    icone: '🎓',
  },
  {
    nome: 'Instituto Canção Nova',
    descricao:
      'Cursos e formações para catequistas e leigos — metodologia, vocação e a missão do Ministério da Catequese.',
    url: 'https://instituto.cancaonova.com/',
    icone: '🎓',
  },
  {
    nome: 'Portal Catequisar',
    descricao: 'Apostilas, manuais e materiais de apoio gratuitos para formação dos pequenos levitas.',
    url: 'https://catequisar.com.br/',
    icone: '📄',
  },
  {
    nome: 'Escola da Fé',
    descricao: 'Curso estruturado com videoaulas sobre vocação, estatuto e atuação do coroinha na missa e sacramentos.',
    url: 'https://escoladafe.com.br/',
    icone: '🎓',
  },
  {
    nome: 'ReLi Catequese (YouTube)',
    descricao: 'Playlists com formações, materiais em PDF e dinâmicas.',
    url: 'https://www.youtube.com/results?search_query=ReLi+Catequese',
    icone: '▶️',
  },
  {
    nome: 'Coroinhas e Acólitos (YouTube)',
    descricao: 'Conteúdos curtos e focados na vivência diária do serviço do altar.',
    url: 'https://www.youtube.com/results?search_query=Coroinhas+Ac%C3%B3litos',
    icone: '▶️',
  },
  {
    nome: '#coroinhas no YouTube',
    descricao: 'Vídeos de várias paróquias com formações, ritos de investidura e tutoriais práticos.',
    url: 'https://www.youtube.com/hashtag/coroinhas',
    icone: '#️⃣',
  },
]
