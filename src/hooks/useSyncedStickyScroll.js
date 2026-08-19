import { useEffect } from 'react'

export default function useSyncedStickyScroll(rowRef, panelRef, topOffset, bottomInset = 0) {
  useEffect(() => {
    let stickyStartY = 0
    let ticking = false

    const measureStickyStart = () => {
      const row = rowRef.current
      if (!row) return
      const rowTop = row.getBoundingClientRect().top + window.scrollY
      stickyStartY = rowTop - topOffset
    }

    const applyScroll = () => {
      ticking = false
      const panel = panelRef.current
      if (!panel) return
      // bottomInset skips trailing decorative padding at the end of the panel's
      // content so the last real content (not empty padding) lands flush against
      // the panel's bottom edge once the sync-scroll reaches its end.
      const maxScrollTop = Math.max(0, panel.scrollHeight - panel.clientHeight - bottomInset)
      const relative = window.scrollY - stickyStartY
      panel.scrollTop = Math.min(Math.max(relative, 0), maxScrollTop)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(applyScroll)
    }

    const onResize = () => {
      measureStickyStart()
      applyScroll()
    }

    measureStickyStart()
    applyScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [rowRef, panelRef, topOffset, bottomInset])
}
