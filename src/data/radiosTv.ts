export interface LinkExterno {
  nome: string
  descricao: string
  url: string
  icone: string
}

export const radiosTv: LinkExterno[] = [
  {
    nome: 'Rádio Aparecida',
    descricao: 'Rádio católica do Santuário Nacional de Aparecida.',
    url: 'https://radioaparecida.com.br/',
    icone: '📻',
  },
  {
    nome: 'TV Aparecida',
    descricao: 'Programação católica ao vivo, missas e novenas.',
    url: 'https://tvaparecida.com.br/',
    icone: '📺',
  },
  {
    nome: 'Rádio Canção Nova',
    descricao: 'Música, formação e programação ao vivo.',
    url: 'https://radio.cancaonova.com/',
    icone: '📻',
  },
  {
    nome: 'Rede Século 21',
    descricao: 'Rádio e TV católica com programação variada.',
    url: 'https://rede21.com.br/',
    icone: '📺',
  },
]
