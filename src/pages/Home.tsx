import { areas } from '../data/areas'
import { AreaStrip } from '../components/AreaStrip'
import { YouTubeLoopBackground } from '../components/YouTubeLoopBackground'
import { QuoteCarousel } from '../components/QuoteCarousel'
import { ColorCycleBanner } from '../components/ColorCycleBanner'
import { ReelsSection } from '../components/ReelsSection'
import { useSiteContent } from '../hooks/useSiteContent'

export function Home() {
  const { content } = useSiteContent()

  const areasComTexto = areas.map((area) => ({
    ...area,
    ...(content.areas[area.slug] ?? {}),
  }))

  return (
    <div>
      <ColorCycleBanner text={content.heroText} />

      <section className="relative h-[45vh] sm:h-[60vh] overflow-hidden bg-[#5c1220]">
        <YouTubeLoopBackground videoId="uTBgvD-B3Q0" />
      </section>

      <QuoteCarousel />

      <section id="projetos" className="bg-[#1c0309] py-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto">
          {areasComTexto.map((area) => (
            <AreaStrip key={area.slug} area={area} />
          ))}
        </div>
      </section>

      <ReelsSection />
    </div>
  )
}
