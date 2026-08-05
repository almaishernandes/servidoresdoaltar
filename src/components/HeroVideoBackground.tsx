import { useEffect, useRef, useState } from 'react'

export function HeroVideoBackground({ sources }: { sources: string[] }) {
  const [index, setIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [index])

  function handleEnded() {
    setIndex((prev) => (prev + 1) % sources.length)
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={sources[index]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-[#2b0d14]/60" />
    </div>
  )
}
