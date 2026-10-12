import { useEffect } from 'react'
import type { Reel } from '../data/reels'

export function ReelModal({ reel, onClose }: { reel: Reel; onClose: () => void }) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={reel.titulo}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.3-1.41-1.42L9.17 12 2.88 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
        </svg>
      </button>

      <div
        className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {reel.videoType === 'mp4' && (
          <video
            src={reel.videoSrc}
            className="h-full w-full object-cover"
            controls
            autoPlay
            playsInline
          />
        )}
        {reel.videoType === 'youtube' && (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${reel.videoSrc}?autoplay=1&playsinline=1`}
            title={reel.titulo}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        {reel.videoType === 'vimeo' && (
          <iframe
            className="h-full w-full"
            src={`https://player.vimeo.com/video/${reel.videoSrc}?autoplay=1`}
            title={reel.titulo}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        {reel.videoType === 'instagram' && (
          <iframe
            className="h-full w-full bg-white"
            src={`https://www.instagram.com/${reel.videoSrc}/embed`}
            title={reel.titulo}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-900">
            {reel.categoria}
          </span>
          <h3 className="mt-2 text-base font-semibold text-white">{reel.titulo}</h3>
          <p className="text-sm text-white/70">{reel.autor}</p>
        </div>
      </div>
    </div>
  )
}
