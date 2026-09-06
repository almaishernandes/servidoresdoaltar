// Roda 1x por dia (via GitHub Actions) para buscar notícias reais dos feeds
// oficiais e pedir à IA que selecione as mais relevantes para os
// Servidores do Altar. Escreve o resultado em src/data/noticiasDestaque.json.

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.join(__dirname, '..', 'src', 'data', 'noticiasDestaque.json')

const FEEDS = [
  { fonte: 'Vatican News', rssUrl: 'https://www.vaticannews.va/pt.rss.xml' },
  { fonte: 'CNBB', rssUrl: 'https://www.cnbb.org.br/feed/' },
  { fonte: 'Canção Nova', rssUrl: 'https://noticias.cancaonova.com/feed/' },
  { fonte: 'Canção Nova — Santo do Dia', rssUrl: 'https://santo.cancaonova.com/feed/' },
  { fonte: 'Aleteia', rssUrl: 'https://pt.aleteia.org/feed/' },
]

const UMA_SEMANA_MS = 7 * 24 * 60 * 60 * 1000

async function buscarFeed({ fonte, rssUrl }) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
  const res = await fetch(apiUrl)
  if (!res.ok) return []
  const data = await res.json()
  if (data.status !== 'ok') return []

  const agora = Date.now()
  return (data.items ?? [])
    .filter((item) => agora - new Date(item.pubDate).getTime() <= UMA_SEMANA_MS)
    .slice(0, 10)
    .map((item) => ({
      titulo: item.title,
      link: item.link,
      fonte,
      data: item.pubDate,
    }))
}

async function main() {
  const listas = await Promise.all(FEEDS.map(buscarFeed))
  const todasNoticias = listas.flat()

  if (todasNoticias.length === 0) {
    console.log('Nenhuma notícia recente encontrada nos feeds. Mantendo arquivo anterior.')
    return
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const listaParaIA = todasNoticias
    .map((n, i) => `${i}. [${n.fonte}] ${n.titulo}`)
    .join('\n')

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 1500,
    messages: [
      {
        role: 'user',
        content: `Você está selecionando notícias para a página inicial de um site de Servidores do Altar (coroinhas, acólitos, monitores, cerimoniários e coordenadores) da Igreja Católica.

Abaixo está uma lista numerada de notícias recentes (últimos 7 dias) de fontes católicas oficiais. Escolha as 5 mais relevantes para esse público — priorize liturgia, formação, vida dos santos, eventos da Igreja, palavra do Papa/bispos e testemunhos que tenham valor formativo ou espiritual direto para quem serve ao altar.

Lista:
${listaParaIA}

Responda APENAS com um JSON válido (array), sem nenhum texto antes ou depois, no formato:
[{"indice": <número da notícia na lista>, "motivo": "<uma frase curta explicando por que é relevante para os Servidores do Altar>"}]`,
      },
    ],
  })

  const textoResposta = message.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('')

  let selecao
  try {
    const jsonMatch = textoResposta.match(/\[[\s\S]*\]/)
    selecao = JSON.parse(jsonMatch ? jsonMatch[0] : textoResposta)
  } catch (err) {
    console.error('Não foi possível interpretar a resposta da IA:', textoResposta)
    throw err
  }

  const destaques = selecao
    .filter((s) => todasNoticias[s.indice])
    .map((s) => ({
      ...todasNoticias[s.indice],
      motivo: s.motivo,
    }))

  const saida = {
    geradoEm: new Date().toISOString(),
    destaques,
  }

  await writeFile(OUT_PATH, JSON.stringify(saida, null, 2) + '\n', 'utf-8')
  console.log(`Gravado ${destaques.length} destaques em ${OUT_PATH}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
