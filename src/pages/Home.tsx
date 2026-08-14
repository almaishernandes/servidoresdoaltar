import { areas } from '../data/areas'
import { AreaCard } from '../components/AreaCard'
import { HeroVideoBackground } from '../components/HeroVideoBackground'
import { QuoteCarousel } from '../components/QuoteCarousel'

const heroVideos = ['/videos/hero-1.mp4']

export function Home() {
  return (
    <div>
      <section className="relative bg-[#5c1220] text-white text-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        <HeroVideoBackground sources={heroVideos} />
        <div className="relative inline-block max-w-2xl mx-auto bg-[#2b0d14]/55 backdrop-blur-sm rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md">Servidores do Altar</h1>
          <p className="text-amber-50 text-base sm:text-lg drop-shadow">
            Uma plataforma central para quem serve ao altar — coroinhas, acólitos, monitores,
            cerimoniários e coordenadores. Aqui reunimos ferramentas de gestão, formação e
            comunidade, cada projeto com sua própria identidade, a serviço da liturgia.
          </p>
        </div>
      </section>

      <QuoteCarousel />

      <section id="projetos" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
    </div>
  )
}
