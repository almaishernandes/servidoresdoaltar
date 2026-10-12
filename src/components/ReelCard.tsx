import type { Reel } from '../data/reels'

export function ReelCard({ reel, onPlay }: { reel: Reel; onPlay: (reel: Reel) => void }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(reel)}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-xl text-left shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      style={{
        background: reel.thumbnail
          ? `url(${reel.thumbnail}) center/cover no-repeat`
          : `linear-gradient(150deg, ${reel.cor} 0%, #0f1f38 130%)`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <span className="absolute left-1.5 top-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-gray-900 backdrop-blur">
        {reel.categoria}
      </span>

      <span className="absolute right-1.5 top-1.5 rounded bg-black/60 px-1 py-0.5 text-[9px] font-medium text-white backdrop-blur">
        {reel.duracao}
      </span>

      <span className="absolute inset-0 flex items-center justify-center opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/40">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-0.5 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-2">
        <h3 className="text-[11px] font-semibold leading-snug text-white line-clamp-2">{reel.titulo}</h3>
        <p className="mt-0.5 text-[10px] text-white/70">{reel.autor}</p>
      </div>
    </button>
  )
}
