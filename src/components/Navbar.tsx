import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="bg-[#5c1220] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-2xl">✝️</span>
          <span>Servidores do Altar</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-amber-100">
          <Link to="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <Link to="/#projetos" className="hover:text-white transition-colors">
            Projetos
          </Link>
          <Link to="/sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  )
}
