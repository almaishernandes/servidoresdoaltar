import { useMemo, useState } from 'react'
import { reelCategorias, resolveVideoUrl, type Reel, type ReelCategoria } from '../data/reels'
import { useSiteContent } from '../hooks/useSiteContent'
import { ReelCard } from './ReelCard'
import { ReelCategoryCard } from './ReelCategoryCard'
import { ReelModal } from './ReelModal'

export function ReelsSection() {
  const { content } = useSiteContent()
  const [filtro, setFiltro] = useState<ReelCategoria>(reelCategorias[0])
  const [reelAtivo, setReelAtivo] = useState<Reel | null>(null)

  const reels = useMemo<Reel[]>(
    () =>
      content.reels
        .filter((r) => r.videoUrl.trim() !== '')
        .map((r) => ({ ...r, ...resolveVideoUrl(r.videoUrl) })),
    [content.reels]
  )

  function capaPara(categoria: ReelCategoria): Reel | undefined {
    return reels.find((r) => r.categoria === categoria)
  }

  const categoriasComReel = reelCategorias.filter((categoria) => capaPara(categoria))
  if (categoriasComReel.length === 0) return null

  const filtroEfetivo = categoriasComReel.includes(filtro) ? filtro : categoriasComReel[0]
  const reelsFiltrados = reels.filter((r) => r.categoria === filtroEfetivo)

  return (
    <section className="bg-[#2b0b12] px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-white">{content.reelsTitle}</h2>
          <p className="mt-1 text-xs sm:text-sm text-white/60">{content.reelsSubtitle}</p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categoriasComReel.map((categoria) => (
            <ReelCategoryCard
              key={categoria}
              categoria={categoria}
              reelCapa={capaPara(categoria)!}
              ativo={filtroEfetivo === categoria}
              onSelect={() => setFiltro(categoria)}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {reelsFiltrados.map((reel) => (
            <ReelCard key={reel.id} reel={reel} onPlay={setReelAtivo} />
          ))}
        </div>
      </div>

      {reelAtivo && <ReelModal reel={reelAtivo} onClose={() => setReelAtivo(null)} />}
    </section>
  )
}
