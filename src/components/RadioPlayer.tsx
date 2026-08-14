import { useEffect, useRef, useState } from 'react'
import { tracks } from '../data/radio'

export function RadioPlayer() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    if (playing) audio.play().catch(() => setPlaying(false))
  }, [index])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  function next() {
    setIndex((prev) => (prev + 1) % tracks.length)
    setPlaying(true)
  }

  function prev() {
    setIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
    setPlaying(true)
  }

  if (tracks.length === 0) return null

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full pl-1 pr-3 py-1 text-white">
      <audio ref={audioRef} src={tracks[index].url} onEnded={next} />
      <button
        onClick={prev}
        aria-label="Faixa anterior"
        className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
      >
        ⏮
      </button>
      <button
        onClick={togglePlay}
        aria-label={playing ? 'Pausar rádio' : 'Tocar rádio'}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-[#5c1220] hover:bg-amber-100 transition-colors"
      >
        {playing ? '⏸' : '▶'}
      </button>
      <button
        onClick={next}
        aria-label="Próxima faixa"
        className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
      >
        ⏭
      </button>
      <span className="hidden sm:inline text-xs text-amber-100 max-w-[9rem] truncate">
        📻 {tracks[index].title}
      </span>
    </div>
  )
}
