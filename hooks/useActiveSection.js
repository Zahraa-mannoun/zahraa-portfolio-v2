import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

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

        const id = topMost.target.id
        setActiveSection(id)
        if (window.location.hash !== `#${id}`) {
          history.replaceState(null, '', `#${id}`)
        }
      },
      { threshold: 0.4 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
