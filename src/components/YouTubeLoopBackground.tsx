export function YouTubeLoopBackground({ videoId }: { videoId: string }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`

  return (
    <div className="relative h-full w-full overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src={src}
        title="Vídeo de fundo"
        allow="autoplay; encrypted-media"
        frameBorder={0}
      />
    </div>
  )
}
