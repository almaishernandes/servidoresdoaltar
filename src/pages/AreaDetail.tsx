import { Link, useParams } from 'react-router-dom'
import { areas } from '../data/areas'

export function AreaDetail() {
  const { slug } = useParams()
  const area = areas.find((a) => a.slug === slug)

  if (!area) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-[#5c1220] hover:underline">
          Voltar ao início
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link to="/#projetos" className="text-sm text-gray-500 hover:text-gray-800">
        ← Todos os projetos
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-5xl">{area.icone}</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{area.titulo}</h1>
        </div>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">{area.descricao}</p>

      <div
        className="mt-10 rounded-2xl p-6 border"
        style={{ borderColor: area.cor, backgroundColor: `${area.cor}10` }}
      >
        {area.status === 'ativo' && area.externalUrl ? (
          <a
            href={area.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-5 py-3 rounded-xl text-white"
            style={{ backgroundColor: area.cor }}
          >
            Acessar {area.titulo} →
          </a>
        ) : (
          <p className="text-gray-600 font-medium">
            🚧 Este projeto está em desenvolvimento. Em breve, conteúdo completo estará
            disponível aqui.
          </p>
        )}
      </div>
    </div>
  )
}
