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
      className="flex items-center justify-center py-4 sm:py-6 px-2"
      style={{ backgroundColor: '#b8860b' }}
    >
      <h2
        className="text-2xl sm:text-5xl font-extrabold uppercase tracking-wide text-center drop-shadow-md transition-colors duration-700"
        style={{ color: colors[colorIndex] }}
      >
        {text}
      </h2>
    </section>
  )
}
