'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Zahraa-mannoun', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zahraa-mannoun/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:zahraa-mannoun@hotmail.com', icon: FaEnvelope },
]

function Footer() {
  return (
    <footer className="border-t border-[#e2e1e8] bg-[#f7f6f2] px-4 py-5 dark:border-white/10 dark:bg-[#0f0f13] md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-0.5 text-center md:items-start md:text-left">
          <p className="font-dm-serif text-xl italic text-accent md:text-2xl">ZM.</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 md:text-[10px]">Software Engineer</p>
        </div>

        <p className="text-center font-space-mono text-xs text-gray-500 dark:text-gray-400 md:text-[10px]">
          © 2026 Zahraa Mannoun. All rights reserved.
        </p>

        <div className="flex gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e2e1e8] text-ink transition-colors hover:border-accent hover:text-accent dark:border-white/20 dark:text-bg"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
