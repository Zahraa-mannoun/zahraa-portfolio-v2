'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Database, ArrowRight, Download, Rocket, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const mePhoto = '/assets/images/me.png'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Zahraa-mannoun', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zahraa-mannoun/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:zahraa-mannoun@hotmail.com', icon: Mail },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Hero() {
  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex max-w-6xl scroll-mt-24 flex-col-reverse items-center gap-12 px-6 py-16 sm:gap-14 sm:py-20 md:flex-row md:justify-between md:px-12 md:py-32"
    >
      <div className="max-w-2xl text-center md:text-left">
        <motion.span
          variants={item}
          className="font-space-mono text-sm font-bold uppercase tracking-widest text-accent"
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-3 font-dm-serif text-5xl leading-tight text-ink sm:text-6xl md:text-7xl dark:text-bg"
        >
          Zahraa{' '}
          <span className="relative inline-block">
            Mannoun
            <svg
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
            >
              <path
                d="M2 14 Q 25 4, 50 14 T 100 14 T 150 14 T 198 14"
                fill="none"
                stroke="#f5a623"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-semibold text-ink sm:text-2xl dark:text-bg"
        >
          Software Engineer &amp; Builder
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg dark:text-bg/70"
        >
          I build secure, scalable and intelligent applications that solve
          real-world problems and create impact.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <Link
            href="/#projects"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="flex cursor-pointer items-center gap-2 rounded-full border border-ink bg-bg px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.03] dark:border-bg dark:bg-ink dark:text-bg dark:hover:bg-bg/[0.06]"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <span className="font-space-mono text-xs uppercase tracking-wider text-ink/50 dark:text-bg/50">
            Let's Connect
          </span>
          <div className="mt-3 flex justify-center gap-3 md:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:border-accent hover:text-accent dark:border-bg/10 dark:text-bg/70"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
      >
        <div className="absolute inset-0 rounded-[60%_40%_70%_30%/50%_60%_40%_50%] bg-[#ede9ff]" />
        <div className="absolute inset-3 overflow-hidden rounded-[55%_45%_65%_35%/55%_45%_65%_35%] sm:inset-4">
          <Image
            src={mePhoto}
            alt="Zahraa Mannoun"
            width={384}
            height={384}
            priority={true}
            quality={90}
            sizes="(min-width: 1280px) 384px, (min-width: 1024px) 320px, (min-width: 768px) 288px, (min-width: 640px) 256px, 224px"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <motion.span
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 left-6 text-[#f5a623]"
          aria-hidden="true"
        >
          <Sparkles size={16} />
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-2 -right-3 text-accent"
          aria-hidden="true"
        >
          <Sparkles size={14} />
        </motion.span>
        <span
          className="absolute left-0 top-1/3 h-2.5 w-2.5 rounded-full bg-[#f5a623]/60"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 left-1/4 h-2 w-2 rounded-full bg-accent/40"
          aria-hidden="true"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-2 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-space-mono text-base font-bold text-accent shadow-lg sm:-left-4 sm:h-14 sm:w-14 sm:text-lg"
        >
          {'</>'}
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -left-1 bottom-16 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-accent shadow-lg sm:bottom-20 sm:h-12 sm:w-12"
        >
          <Database size={18} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-2 top-2 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-2 text-xs font-medium text-ink shadow-lg sm:-right-4"
        >
          <Rocket size={13} className="text-accent" />
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to Opportunities
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
