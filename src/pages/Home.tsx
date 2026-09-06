import { areas } from '../data/areas'
import { AreaStrip } from '../components/AreaStrip'
import { YouTubeLoopBackground } from '../components/YouTubeLoopBackground'
import { QuoteCarousel } from '../components/QuoteCarousel'
import { ColorCycleBanner } from '../components/ColorCycleBanner'

export function Home() {
  return (
    <div>
      <ColorCycleBanner text="Zelus Domus Tuae Comedite Me" />

      <section className="relative h-[45vh] sm:h-[60vh] overflow-hidden bg-[#5c1220]">
        <YouTubeLoopBackground videoId="uTBgvD-B3Q0" />
      </section>

      <QuoteCarousel />

      <section id="projetos" className="grid grid-cols-1 sm:grid-cols-2">
        {areas.map((area) => (
          <AreaStrip key={area.slug} area={area} />
        ))}
      </section>
    </div>
  )
}
