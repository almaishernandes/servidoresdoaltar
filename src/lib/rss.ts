export interface FeedItem {
  title: string
  link: string
  pubDate: string
  thumbnail?: string
}

export interface FeedResult {
  title: string
  items: FeedItem[]
}

const UMA_SEMANA_MS = 7 * 24 * 60 * 60 * 1000

export async function fetchFeed(rssUrl: string, limit = 5): Promise<FeedResult> {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
  const res = await fetch(apiUrl)
  if (!res.ok) throw new Error(`Falha ao buscar feed: ${res.status}`)
  const data = await res.json()
  if (data.status !== 'ok') throw new Error(data.message || 'Erro desconhecido no feed')

  const agora = Date.now()

  return {
    title: data.feed?.title ?? '',
    items: (data.items ?? [])
      .filter((item: any) => agora - new Date(item.pubDate).getTime() <= UMA_SEMANA_MS)
      .slice(0, limit)
      .map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: item.thumbnail || item.enclosure?.link || undefined,
      })),
  }
}
