import { useEffect, useState } from 'react'

const colors = ['#ffffff', '#f3e9db', '#5c1220', '#1e5a4a', '#3a2f6b', '#a3272f']

export function ColorCycleBanner({ text, intervalMs = 2500 }: { text: string; intervalMs?: number }) {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [intervalMs])

  return (
    <section
      className="flex flex-col items-center justify-center gap-3 py-4 sm:py-6 px-2"
      style={{ backgroundColor: '#b8860b' }}
    >
      <img
        src="/logo.png"
        alt="Servidores no Altar"
        className="h-16 w-16 sm:h-24 sm:w-24 rounded-full shadow-lg"
      />
      <h2
        className="text-2xl sm:text-5xl font-extrabold uppercase tracking-wide text-center drop-shadow-md transition-colors duration-700"
        style={{ color: colors[colorIndex] }}
      >
        {text}
      </h2>
    </section>
  )
}
