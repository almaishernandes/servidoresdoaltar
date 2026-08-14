import { Link } from 'react-router-dom'
import { RadioPlayer } from './RadioPlayer'

export function Navbar() {
  return (
    <header className="bg-[#5c1220] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg shrink-0">
          <span className="text-2xl">✝️</span>
          <span className="hidden sm:inline">Servidores do Altar</span>
        </Link>
        <RadioPlayer />
      </div>
    </header>
  )
}
