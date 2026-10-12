import { useSiteContent } from '../hooks/useSiteContent'

export function Footer() {
  const { content } = useSiteContent()

  return (
    <footer className="bg-[#5c1220] text-amber-100 text-center py-6 text-sm mt-auto">
      <p>✝️ {content.footerText} · 2026</p>
    </footer>
  )
}
