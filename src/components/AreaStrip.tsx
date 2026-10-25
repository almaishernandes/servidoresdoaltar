import { Link } from 'react-router-dom'
import type { Area } from '../data/areas'

export function AreaStrip({ area }: { area: Area }) {
  const content = (
    <div
      className="group relative flex flex-col text-center text-white h-[220px] sm:h-[280px] overflow-hidden border-2 border-[#1c0309]"
      style={{ backgroundColor: area.cor }}
    >
      <div className="h-1/2 shrink-0 overflow-hidden bg-black/20">
        {area.imagem ? (
          <img
            src={area.imagem}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: area.imagemPosicao ?? 'center' }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl sm:text-5xl">
            {area.icone}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-3 py-2">
        <h3 className="text-xs sm:text-base font-bold leading-tight mb-1 drop-shadow-md">{area.titulo}</h3>
        <p className="hidden sm:block text-[11px] sm:text-xs text-white/85 line-clamp-2">{area.resumo}</p>
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
