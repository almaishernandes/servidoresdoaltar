import type { LinkExterno } from '../data/radiosTv'

export function LinkListSection({ titulo, links }: { titulo: string; links: LinkExterno[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-[#0f4c81] mb-3">{titulo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.nome}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl border border-[#0f4c81]/15 p-3 hover:shadow-md transition-shadow"
          >
            <span className="text-xl shrink-0">{link.icone}</span>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">{link.nome}</h3>
              <p className="text-xs text-gray-500">{link.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
