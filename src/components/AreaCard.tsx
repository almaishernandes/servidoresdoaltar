import { Link } from 'react-router-dom'
import type { Area } from '../data/areas'

export function AreaCard({ area }: { area: Area }) {
  const content = (
    <div
      className="group relative aspect-[16/10] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${area.cor} 0%, #2b0d14 100%)`,
      }}
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl sm:text-4xl drop-shadow-sm">{area.icone}</span>
        {area.status === 'em-breve' && (
          <span className="text-xs font-medium bg-white/15 backdrop-blur px-2 py-1 rounded-full">
            Em breve
          </span>
        )}
        {area.status === 'ativo' && (
          <span className="text-xs font-medium bg-white/90 text-green-700 px-2 py-1 rounded-full">
            Disponível
          </span>
        )}
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-semibold leading-tight mb-1">{area.titulo}</h3>
        <p className="text-[11px] sm:text-xs text-white/70 mb-2">{area.resumo}</p>
        <span className="text-sm font-medium group-hover:underline">
          {area.status === 'ativo' ? 'Acessar →' : 'Saiba mais →'}
        </span>
      </div>

      <div className="pointer-events-none absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-white/5" />
    </div>
  )

  if (area.status === 'ativo' && area.externalUrl) {
    return (
      <a href={area.externalUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link to={`/areas/${area.slug}`}>{content}</Link>
}
