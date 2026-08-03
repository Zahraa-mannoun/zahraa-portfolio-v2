'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Zahraa-mannoun', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zahraa-mannoun/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:zahraa-mannoun@hotmail.com', icon: FaEnvelope },
]

function Footer() {
  return (
    <footer className="border-t border-[#e2e1e8] bg-[#f7f6f2] px-8 py-10 dark:border-white/10 dark:bg-[#0f0f13]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-sm font-bold text-ink dark:text-bg">Zahraa Mannoun</p>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
        </div>

        <p className="font-space-mono text-xs text-gray-500 dark:text-gray-400">
          © 2026 Zahraa Mannoun. All rights reserved.
        </p>

        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e1e8] text-ink transition-colors hover:border-accent hover:text-accent dark:border-white/20 dark:text-bg"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
