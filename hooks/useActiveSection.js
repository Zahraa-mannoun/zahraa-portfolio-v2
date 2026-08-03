import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

// Tracks which section is currently in view so the navbar can highlight the
// matching link. Uses a thin horizontal band near the vertical center of the
// viewport (via rootMargin) rather than the default "any part visible" check —
// that's what keeps only one section active at a time instead of several
// competing while a tall section is still mostly on screen.
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest,
        )
        setActiveSection(topMost.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
