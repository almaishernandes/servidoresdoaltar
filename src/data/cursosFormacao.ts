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
    descricao: 'Artigos e orientações sobre funções litúrgicas, espiritualidade e ministérios.',
    url: 'https://instituto.cancaonova.com/',
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
