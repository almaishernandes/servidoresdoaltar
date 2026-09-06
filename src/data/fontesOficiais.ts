export interface FonteOficial {
  nome: string
  descricao: string
  url: string
  icone: string
}

export const fontesOficiais: FonteOficial[] = [
  {
    nome: 'Canção Nova',
    descricao: 'Notícias, música católica e programação ao vivo.',
    url: 'https://noticias.cancaonova.com/',
    icone: '📡',
  },
  {
    nome: 'Santuário Nacional de Aparecida',
    descricao: 'Agenda de romarias, missas e celebrações em Aparecida.',
    url: 'https://www.a12.com/',
    icone: '⛪',
  },
  {
    nome: 'Vatican News (português)',
    descricao: 'Notícias oficiais da Santa Sé sobre o Papa e a Igreja no mundo.',
    url: 'https://www.vaticannews.va/pt.html',
    icone: '🕊️',
  },
  {
    nome: 'CNBB',
    descricao: 'Notícias e eventos da Igreja Católica no Brasil.',
    url: 'https://www.cnbb.org.br/',
    icone: '🇧🇷',
  },
]
