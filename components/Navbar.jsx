'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'

const links = [
  { label: 'Home', to: 'hero', type: 'scroll' },
  { label: 'About', to: 'about', type: 'scroll' },
  { label: 'Skills', to: 'skills', type: 'scroll' },
  { label: 'Projects', to: 'projects', type: 'scroll' },
  { label: 'Experience', to: 'experience', type: 'scroll' },
  { label: 'Certificates', to: '/certificates', type: 'route' },
  { label: 'Contact', to: 'contact', type: 'scroll' },
]

const navLinkClass =
  'relative cursor-pointer whitespace-nowrap text-sm font-medium transition-colors hover:text-accent'
const navLinkInactiveClass = 'text-ink/70 dark:text-bg/70'

const pillTransition = { type: 'spring', stiffness: 380, damping: 30 }

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Measures the real navbar height at click time (rather than assuming a
// fixed value) since it can render at a different height on mobile vs
// desktop, then does the scrollTo manually — scrollIntoView's scroll-margin
// offset was landing correctly on desktop but drifting on mobile.
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (!element) return
  const navbar = document.querySelector('header')
  const offset = (navbar?.getBoundingClientRect().height ?? 61) + 20
  const elementTop = element.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: elementTop - offset, behavior: 'smooth' })
}

function NavItem({ to, isActive, className, onClick, children }) {
  const pathname = usePathname()

  const handleClick = (event) => {
    if (pathname === '/') {
      event.preventDefault()
      if (onClick) {
        // Mobile menu items also close the dropdown, whose collapse
        // animation shifts the page layout for ~300ms — measuring/scrolling
        // before that settles is what was landing mid-section. Closing
        // first and waiting it out fixes it.
        onClick()
        setTimeout(() => scrollToSection(to), 320)
        return
      }
      scrollToSection(to)
    } else {
      sessionStorage.setItem('scrollTarget', to)
    }
    onClick?.()
  }

  return (
    <Link href={`/#${to}`} scroll={false} className={className} onClick={handleClick}>
      <span className="relative inline-block">
        {children}
        {isActive && (
          <motion.span
            layoutId="activeTab"
            transition={pillTransition}
            className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-accent"
          />
        )}
      </span>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const activeSection = useActiveSection()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-ink/5 bg-bg/70 backdrop-blur-md dark:border-bg/5 dark:bg-ink/70"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-3 md:px-12">
        <Link href="/" className="-rotate-3 font-dm-serif text-2xl italic text-accent">
          ZM.
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {links.map((link) => {
            if (link.type === 'route') {
              const isActive = pathname === link.to
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`${navLinkClass} ${isActive ? 'text-accent' : navLinkInactiveClass}`}
                >
                  {link.label}
                </Link>
              )
            }

            const isActive = isHome && activeSection === link.to
            return (
              <NavItem
                key={link.to}
                to={link.to}
                isActive={isActive}
                className={`${navLinkClass} ${isActive ? 'text-accent' : navLinkInactiveClass}`}
              >
                {link.label}
              </NavItem>
            )
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <NavItem
            to="contact"
            className="hidden cursor-pointer whitespace-nowrap rounded-full bg-ink px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 lg:inline-flex dark:bg-bg dark:text-ink"
          >
            <span className="flex items-center gap-2">
              Let's Talk <ArrowRight size={14} />
            </span>
          </NavItem>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-accent hover:text-accent dark:border-bg/10 dark:text-bg"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-accent hover:text-accent dark:border-bg/10 dark:text-bg lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-ink/5 dark:border-bg/5 lg:hidden"
          >
            <div className="flex flex-col items-center gap-1 px-6 py-4">
              {links.map((link) => {
                const mobileLinkClass = (active) =>
                  `w-full cursor-pointer rounded-lg px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-ink/[0.03] hover:text-accent dark:hover:bg-bg/[0.06] ${
                    active ? 'text-accent' : 'text-ink/70 dark:text-bg/70'
                  }`

                if (link.type === 'route') {
                  const isActive = pathname === link.to
                  return (
                    <Link
                      key={link.to}
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className={mobileLinkClass(isActive)}
                    >
                      {link.label}
                    </Link>
                  )
                }

                const isActive = isHome && activeSection === link.to
                return (
                  <NavItem
                    key={link.to}
                    to={link.to}
                    isActive={isActive}
                    onClick={() => setOpen(false)}
                    className={mobileLinkClass(isActive)}
                  >
                    {link.label}
                  </NavItem>
                )
              })}
              <NavItem
                to="contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 dark:bg-bg dark:text-ink"
              >
                <span className="flex items-center gap-2">
                  Let's Talk <ArrowRight size={14} />
                </span>
              </NavItem>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
