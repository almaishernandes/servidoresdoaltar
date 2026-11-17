import { useEffect, useRef, useState } from 'react'

const VIDEO_ASPECT = 16 / 9

export function YouTubeLoopBackground({ videoId }: { videoId: string }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`

  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Cobre o contêiner inteiro mantendo a proporção 16:9 do vídeo (sem esticar nem sobrar faixa).
  const containerAspect = size.width / (size.height || 1)
  const iframeWidth = containerAspect > VIDEO_ASPECT ? size.width : size.height * VIDEO_ASPECT
  const iframeHeight = iframeWidth / VIDEO_ASPECT

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {size.width > 0 && (
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: iframeWidth, height: iframeHeight }}
          src={src}
          title="Vídeo de fundo"
          allow="autoplay; encrypted-media"
          frameBorder={0}
        />
      )}
    </div>
  )
}
