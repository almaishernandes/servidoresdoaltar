import { Link } from 'react-router-dom'
import { NewsSection } from '../components/NewsSection'
import { LinkListSection } from '../components/LinkListSection'
import { DestaquesIA } from '../components/DestaquesIA'
import { fontesOficiais } from '../data/fontesOficiais'
import { radiosTv } from '../data/radiosTv'
import { cursosFormacao } from '../data/cursosFormacao'
import { diocesesProximas } from '../data/diocesesProximas'

export function EventosIgrejaCatolica() {
  return (
    <div>
      <section className="bg-[#0f4c81] text-white text-center px-4 sm:px-6 py-14 sm:py-20">
        <Link to="/#projetos" className="text-sm text-blue-100 hover:text-white">
          ← Todos os projetos
        </Link>
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 mb-3">A Igreja Católica</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Acompanhe as principais decisões do Vaticano, as celebrações das paróquias locais e as
          ações sociais da Igreja Católica. Um espaço dedicado à fé, à oração e ao fortalecimento
          da comunidade cristã no dia a dia. Confira as reflexões do Evangelho e os eventos que
          marcam a caminhada da nossa Igreja.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <DestaquesIA />

        <div className="mb-10 rounded-xl border border-[#0f4c81]/20 p-4 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-sm font-bold text-[#0f4c81]">Homilias e Evangelho do dia</h2>
            <p className="text-xs text-gray-500">Liturgia diária sempre atualizada — CNBB</p>
          </div>
          <a
            href="https://www.cnbb.org.br/liturgia-diaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-[#0f4c81] px-4 py-2 rounded-lg hover:bg-[#0c3d68] transition-colors"
          >
            Ver de hoje →
          </a>
        </div>

        <NewsSection
          titulo="Liturgia, eventos e a palavra de bispos e do Papa"
          fonte="Vatican News"
          rssUrl="https://www.vaticannews.va/pt.rss.xml"
        />

        <NewsSection
          titulo="Notícias, eventos e a Igreja no Brasil"
          fonte="CNBB"
          rssUrl="https://www.cnbb.org.br/feed/"
        />

        <NewsSection
          titulo="Música, shows e cultura católica"
          fonte="Canção Nova"
          rssUrl="https://noticias.cancaonova.com/feed/"
        />

        <NewsSection
          titulo="Vida dos santos da Igreja Católica"
          fonte="Canção Nova — Santo do Dia"
          rssUrl="https://santo.cancaonova.com/feed/"
        />

        <NewsSection
          titulo="Cursos, palestras, podcasts e testemunhos de leigos"
          fonte="Aleteia"
          rssUrl="https://pt.aleteia.org/feed/"
        />

        <LinkListSection titulo="Rádios e TVs católicas" links={radiosTv} />

        <LinkListSection titulo="Cursos e formação de leigos" links={cursosFormacao} />

        <LinkListSection titulo="Diocese de Marília e dioceses próximas" links={diocesesProximas} />

        <div className="mt-10 pt-6 border-t border-[#0f4c81]/15">
          <p className="text-xs text-gray-400 mb-3">
            Não existe uma fonte nacional que agregue notícias específicas de coroinhas e
            acólitos de cada paróquia — esse conteúdo costuma ficar só nas redes sociais de
            cada grupo. Se você tiver contas, grupos ou paróquias específicas que queira que a
            gente acompanhe aqui, é só pedir para adicionar.
          </p>
          <div className="flex flex-wrap gap-3">
            {fontesOficiais.map((fonte) => (
              <a
                key={fonte.nome}
                href={fonte.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#0f4c81] hover:underline"
              >
                {fonte.icone} {fonte.nome}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
