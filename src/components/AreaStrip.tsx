import { Link } from 'react-router-dom'
import type { Area } from '../data/areas'

export function AreaStrip({ area }: { area: Area }) {
  const content = (
    <div
      className="group relative flex items-center justify-center text-center text-white px-4 sm:px-5 py-7 sm:py-9 min-h-[160px] overflow-hidden"
      style={{ backgroundColor: area.cor }}
    >
      <div className="relative max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl sm:text-3xl drop-shadow-sm">{area.icone}</span>
          {area.status === 'em-breve' ? (
            <span className="text-xs font-medium bg-white/15 backdrop-blur px-2 py-1 rounded-full">
              Em breve
            </span>
          ) : (
            <span className="text-xs font-medium bg-white/90 text-green-700 px-2 py-1 rounded-full">
              Disponível
            </span>
          )}
        </div>
        <h3 className="text-base sm:text-xl font-bold leading-tight mb-1 drop-shadow-md">{area.titulo}</h3>
        <p className="text-xs sm:text-sm text-white/85 mb-2">{area.resumo}</p>
        <span className="inline-block text-xs sm:text-sm font-semibold border-b-2 border-white/70 group-hover:border-white transition-colors">
          {area.status === 'ativo' ? 'Acessar →' : 'Saiba mais →'}
        </span>
      </div>
    </div>
  )

  if (area.status === 'ativo' && area.externalUrl) {
    return (
      <a href={area.externalUrl} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return (
    <Link to={`/areas/${area.slug}`} className="block">
      {content}
    </Link>
  )
}
