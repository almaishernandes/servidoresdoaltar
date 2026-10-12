import { Link } from 'react-router-dom'
import type { Area } from '../data/areas'

export function AreaStrip({ area }: { area: Area }) {
  const content = (
    <div
      className="group relative flex items-center justify-center text-center text-white px-2 sm:px-3 py-4 sm:py-6 min-h-[110px] sm:min-h-[150px] overflow-hidden"
      style={{
        backgroundColor: area.cor,
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url(${area.imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative max-w-2xl">
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <span className="text-lg sm:text-2xl drop-shadow-sm">{area.icone}</span>
          {area.status === 'em-breve' ? (
            <span className="text-[10px] sm:text-xs font-medium bg-white/15 backdrop-blur px-1.5 py-0.5 rounded-full">
              Em breve
            </span>
          ) : (
            <span className="text-[10px] sm:text-xs font-medium bg-white/90 text-green-700 px-1.5 py-0.5 rounded-full">
              Disponível
            </span>
          )}
        </div>
        <h3 className="text-xs sm:text-base font-bold leading-tight mb-1 drop-shadow-md">{area.titulo}</h3>
        <p className="hidden sm:block text-[11px] sm:text-xs text-white/85 mb-1.5 line-clamp-2">{area.resumo}</p>
        <span className="inline-block text-[10px] sm:text-xs font-semibold border-b-2 border-white/70 group-hover:border-white transition-colors">
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
