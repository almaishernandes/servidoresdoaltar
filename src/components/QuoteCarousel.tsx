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
    <section className="bg-[#f3e9db] px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className={`text-lg sm:text-xl text-[#5c1220] leading-relaxed font-serif italic transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          “{quotes[index]}”
        </p>
      </div>
    </section>
  )
}
