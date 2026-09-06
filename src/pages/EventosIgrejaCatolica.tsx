import { Link } from 'react-router-dom'
import { fontesOficiais } from '../data/fontesOficiais'
import { destaques } from '../data/newsletterDestaques'

export function EventosIgrejaCatolica() {
  return (
    <div>
      <section className="bg-[#0f4c81] text-white text-center px-4 sm:px-6 py-14 sm:py-20">
        <Link to="/#projetos" className="text-sm text-blue-100 hover:text-white">
          ← Todos os projetos
        </Link>
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">
          Eventos da Igreja Católica no Mundo
        </h1>
        <p className="max-w-xl mx-auto text-blue-100">
          Newsletter com novidades de liturgia, eventos, música e shows católicos — jornadas,
          congressos eucarísticos, peregrinações e celebrações ao redor do mundo.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-xl font-bold text-[#0f4c81] mb-4">Fontes oficiais</h2>
        <p className="text-gray-600 mb-6">
          Acompanhe direto nos canais oficiais — sempre atualizados por eles mesmos:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {fontesOficiais.map((fonte) => (
            <a
              key={fonte.nome}
              href={fonte.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-xl border border-[#0f4c81]/20 p-4 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{fonte.icone}</span>
              <div>
                <h3 className="font-semibold text-[#0f4c81]">{fonte.nome}</h3>
                <p className="text-sm text-gray-600">{fonte.descricao}</p>
              </div>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#0f4c81] mb-4">Destaques</h2>
        <div className="space-y-4">
          {destaques.map((item, i) => (
            <div key={i} className="rounded-xl bg-[#f3e9db] p-5">
              <p className="text-xs text-gray-500 mb-1">
                {new Date(item.data).toLocaleDateString('pt-BR')}
              </p>
              <h3 className="font-semibold text-[#0f4c81] mb-1">{item.titulo}</h3>
              <p className="text-sm text-gray-700">{item.resumo}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
