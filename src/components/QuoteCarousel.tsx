import { useEffect, useState } from 'react'
import { quotes } from '../data/quotes'

export function QuoteCarousel() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length)
        setVisible(true)
      }, 500)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#f3e9db] px-4 sm:px-6 py-4 sm:py-5">
      <div className="max-w-2xl mx-auto text-center flex items-center justify-center min-h-[3.5rem] sm:min-h-[3rem]">
        <p
          className={`text-sm sm:text-base text-[#5c1220] leading-snug font-serif italic line-clamp-2 transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          “{quotes[index]}”
        </p>
      </div>
    </section>
  )
}
