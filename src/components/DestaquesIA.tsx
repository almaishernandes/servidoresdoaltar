import noticiasDestaque from '../data/noticiasDestaque.json'

export function DestaquesIA() {
  const { destaques, geradoEm } = noticiasDestaque as {
    destaques: { titulo: string; link: string; fonte: string; data: string; motivo: string }[]
    geradoEm: string | null
  }

  if (destaques.length === 0) return null

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="text-lg font-bold text-[#0f4c81]">
          🤖 Selecionado pela IA para os Servidores do Altar
        </h2>
      </div>
      {geradoEm && (
        <p className="text-xs text-gray-400 mb-3">
          Atualizado em {new Date(geradoEm).toLocaleDateString('pt-BR')}
        </p>
      )}
      <ul className="space-y-3">
        {destaques.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#0f4c81]/20 bg-[#f3e9db]/40 p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#0f4c81] leading-snug">
                {item.titulo}
              </h3>
              <p className="text-xs text-[#0f4c81] mt-1 italic">{item.motivo}</p>
              <p className="text-xs text-gray-400 mt-1">
                {item.fonte} · {new Date(item.data).toLocaleDateString('pt-BR')}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
