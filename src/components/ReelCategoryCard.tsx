import type { Reel, ReelCategoria } from '../data/reels'

export function ReelCategoryCard({
  categoria,
  reelCapa,
  ativo,
  onSelect,
}: {
  categoria: ReelCategoria
  reelCapa: Reel
  ativo: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative aspect-[9/16] w-16 sm:w-24 shrink-0 overflow-hidden rounded-lg text-left shadow-md transition-all duration-300 hover:shadow-2xl ${
        ativo ? 'ring-2 ring-white' : 'ring-1 ring-white/10'
      }`}
      style={{
        background: reelCapa.thumbnail
          ? `url(${reelCapa.thumbnail}) center/cover no-repeat`
          : `linear-gradient(150deg, ${reelCapa.cor} 0%, #0f1f38 130%)`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <span className="absolute inset-0 flex items-center justify-center opacity-90 transition-transform duration-300 group-hover:scale-110">
        <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/40">
          <svg viewBox="0 0 24 24" className="h-2 w-2 sm:h-2.5 sm:w-2.5 translate-x-0.5 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-1.5">
        <h3 className="text-[9px] sm:text-[10px] font-bold leading-snug text-white">{categoria}</h3>
      </div>
    </button>
  )
}
