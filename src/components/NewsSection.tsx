import { useEffect, useState } from 'react'
import { fetchFeed, type FeedItem } from '../lib/rss'

export function NewsSection({
  titulo,
  fonte,
  rssUrl,
  limit = 5,
}: {
  titulo: string
  fonte: string
  rssUrl: string
  limit?: number
}) {
  const [items, setItems] = useState<FeedItem[] | null>(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    let cancelado = false
    fetchFeed(rssUrl, limit)
      .then((res) => {
        if (!cancelado) setItems(res.items)
      })
      .catch(() => {
        if (!cancelado) setErro(true)
      })
    return () => {
      cancelado = true
    }
  }, [rssUrl, limit])

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-lg font-bold text-[#0f4c81]">{titulo}</h2>
        <span className="text-xs text-gray-400">Fonte: {fonte}</span>
      </div>

      {erro && (
        <p className="text-sm text-gray-500">
          Não foi possível carregar as notícias agora. Tente atualizar a página.
        </p>
      )}

      {!erro && !items && (
        <p className="text-sm text-gray-400">Carregando notícias...</p>
      )}

      {items && items.length === 0 && (
        <p className="text-sm text-gray-500">Nenhuma notícia disponível no momento.</p>
      )}

      {items && items.length > 0 && (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-[#0f4c81]/15 p-3 hover:shadow-md transition-shadow"
              >
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#0f4c81] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(item.pubDate).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
