import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { defaultSiteContent, type SiteContent } from '../data/siteContent'

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      const { data, error } = await supabase
        .from('hub_site_content')
        .select('data')
        .eq('id', 'main')
        .single()

      if (!cancelled && !error && data) {
        const loaded = data.data as Partial<SiteContent>
        setContent({ ...defaultSiteContent, ...loaded, areas: { ...loaded.areas } })
      }
      if (!cancelled) setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return { content, loading, setContent }
}
