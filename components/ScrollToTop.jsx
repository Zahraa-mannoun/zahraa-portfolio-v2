'use client'

import { useEffect } from 'react'

// Reading window.location.hash here is unreliable — Next.js clears the hash
// from the URL as part of its own internal navigation bookkeeping, racing
// with this effect. Cross-page section links stash their target in
// sessionStorage instead (see Navbar's NavItem), which this consumes once
// on mount, immune to that race.
function ScrollToTop() {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget')
    if (target) {
      sessionStorage.removeItem('scrollTarget')
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollToTop
