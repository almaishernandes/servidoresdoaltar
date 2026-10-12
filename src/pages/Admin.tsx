import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAdminSession, LoginForm } from '../components/AdminAuth'
import { useSiteContent } from '../hooks/useSiteContent'
import { areas } from '../data/areas'
import { reelCategorias, type ReelCategoria } from '../data/reels'
import type { ReelContent, SiteContent } from '../data/siteContent'

export function Admin() {
  const session = useAdminSession()

  if (session === undefined) {
    return <div className="max-w-xl mx-auto px-6 py-16 text-center text-gray-500">Carregando…</div>
  }

  if (!session) {
    return <LoginForm title="Admin — Servidores no Altar" />
  }

  return <ContentEditor />
}

function ContentEditor() {
  const { content, loading, setContent } = useSiteContent()
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  function updateField<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setContent((prev) => ({ ...prev, [key]: value }))
  }

  function updateReel<K extends keyof ReelContent>(id: string, field: K, value: ReelContent[K]) {
    setContent((prev) => ({
      ...prev,
      reels: prev.reels.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    }))
  }

  function addReel() {
    setContent((prev) => ({
      ...prev,
      reels: [
        ...prev.reels,
        {
          id: `corte-${Date.now()}`,
          titulo: '',
          categoria: reelCategorias[0],
          autor: '',
          duracao: '',
          cor: '#5c1220',
          videoUrl: '',
        },
      ],
    }))
  }

  function removeReel(id: string) {
    setContent((prev) => ({ ...prev, reels: prev.reels.filter((r) => r.id !== id) }))
  }

  function updateArea(slug: string, field: 'titulo' | 'resumo', value: string) {
    setContent((prev) => ({
      ...prev,
      areas: {
        ...prev.areas,
        [slug]: {
          ...(prev.areas[slug] ?? { titulo: '', resumo: '' }),
          [field]: value,
        },
      },
    }))
  }

  async function handleSave() {
    setStatus('saving')
    const { error } = await supabase
      .from('hub_site_content')
      .update({ data: content, updated_at: new Date().toISOString() })
      .eq('id', 'main')
    if (error) {
      setStatus('error')
      return
    }
    setStatus('saved')
    setTimeout(() => setStatus('idle'), 2500)
  }

  if (loading) {
    return <div className="max-w-xl mx-auto px-6 py-16 text-center text-gray-500">Carregando…</div>
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Editor de conteúdo</h1>
        <button
          type="button"
          onClick={() => supabase.auth.signOut()}
          className="text-xs text-gray-500 hover:text-gray-800"
        >
          Sair
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Edita os textos e vídeos do site aqui e salva. A mudança já fica salva no banco de dados —
        basta recarregar servidoresnoaltar.com.br pra ver, sem precisar de deploy.
      </p>

      <section className="mb-6 rounded-xl bg-amber-50 border border-amber-200 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-amber-900 mb-3">Frase do topo (hero)</h2>
        <textarea
          className="w-full rounded-lg border border-gray-300 p-3 text-sm bg-white"
          rows={2}
          value={content.heroText}
          onChange={(e) => updateField('heroText', e.target.value)}
        />
      </section>

      <section className="mb-6 rounded-xl bg-rose-50 border border-rose-200 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-rose-900 mb-3">Rodapé</h2>
        <label className="block text-xs font-medium text-gray-500 mb-1">Frase institucional</label>
        <textarea
          className="w-full rounded-lg border border-gray-300 p-3 text-sm bg-white"
          rows={3}
          value={content.footerText}
          onChange={(e) => updateField('footerText', e.target.value)}
        />
      </section>

      <section className="mb-6 rounded-xl bg-sky-50 border border-sky-200 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-sky-900 mb-3">Seção de vídeos (Cortes)</h2>
        <label className="block text-xs font-medium text-gray-500 mb-1">Título</label>
        <input
          className="w-full rounded-lg border border-gray-300 p-3 text-sm bg-white mb-4"
          value={content.reelsTitle}
          onChange={(e) => updateField('reelsTitle', e.target.value)}
        />
        <label className="block text-xs font-medium text-gray-500 mb-1">Subtítulo</label>
        <textarea
          className="w-full rounded-lg border border-gray-300 p-3 text-sm bg-white"
          rows={2}
          value={content.reelsSubtitle}
          onChange={(e) => updateField('reelsSubtitle', e.target.value)}
        />
      </section>

      <section className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-emerald-900 mb-3">Vídeos dos cortes</h2>
        <p className="text-xs text-gray-500 mb-4">
          Cole o link do YouTube, YouTube Shorts, Vimeo, Instagram (post ou reel) ou um
          link/caminho direto de mp4 para cada corte. Cortes sem link não aparecem no site.
        </p>
        <div className="flex flex-col gap-4">
          {content.reels.map((reel) => (
            <div key={reel.id} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <input
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm font-medium"
                  placeholder="Título do corte"
                  value={reel.titulo}
                  onChange={(e) => updateReel(reel.id, 'titulo', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => removeReel(reel.id)}
                  className="shrink-0 text-xs text-red-700 hover:text-red-900 px-2 py-2"
                >
                  Remover
                </button>
              </div>

              <label className="block text-xs font-medium text-gray-500 mb-1">Link do vídeo</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2 text-sm mb-3"
                placeholder="https://instagram.com/p/... ou youtube.com/shorts/... ou vimeo.com/... ou /videos/arquivo.mp4"
                value={reel.videoUrl}
                onChange={(e) => updateReel(reel.id, 'videoUrl', e.target.value)}
              />

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Categoria</label>
                  <select
                    className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                    value={reel.categoria}
                    onChange={(e) => updateReel(reel.id, 'categoria', e.target.value as ReelCategoria)}
                  >
                    {reelCategorias.map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Duração</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                    placeholder="0:45"
                    value={reel.duracao}
                    onChange={(e) => updateReel(reel.id, 'duracao', e.target.value)}
                  />
                </div>
              </div>

              <label className="block text-xs font-medium text-gray-500 mb-1">Autor / evento</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                value={reel.autor}
                onChange={(e) => updateReel(reel.id, 'autor', e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addReel}
          className="mt-4 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          + Adicionar corte
        </button>
      </section>

      <section className="mb-10 rounded-xl bg-violet-50 border border-violet-200 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-violet-900 mb-3">Projetos (cards da home)</h2>
        <div className="flex flex-col gap-4">
          {areas.map((area) => {
            const override = content.areas[area.slug] ?? { titulo: area.titulo, resumo: area.resumo }
            return (
              <div key={area.slug} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-xs font-medium text-gray-400 mb-2">{area.slug}</p>
                <label className="block text-xs font-medium text-gray-500 mb-1">Título</label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm mb-3"
                  value={override.titulo}
                  onChange={(e) => updateArea(area.slug, 'titulo', e.target.value)}
                />
                <label className="block text-xs font-medium text-gray-500 mb-1">Descrição curta</label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  rows={2}
                  value={override.resumo}
                  onChange={(e) => updateArea(area.slug, 'resumo', e.target.value)}
                />
              </div>
            )
          })}
        </div>
      </section>

      <button
        type="button"
        onClick={handleSave}
        disabled={status === 'saving'}
        className="rounded-lg bg-[#5c1220] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#7a1a2c] disabled:opacity-60"
      >
        {status === 'saving' ? 'Salvando…' : 'Salvar alterações'}
      </button>
      {status === 'saved' && <p className="mt-3 text-sm text-green-700">Salvo! Recarregue a Home para ver.</p>}
      {status === 'error' && <p className="mt-3 text-sm text-red-700">Erro ao salvar — tenta de novo.</p>}
    </div>
  )
}
