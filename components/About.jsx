'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaReact, FaAndroid, FaBrain } from 'react-icons/fa'
import { SiNestjs } from 'react-icons/si'

const stats = [
  { value: '2+', label: 'Years of Learning' },
  { value: '100+', label: 'Problems Solved' },
  { value: '20+', label: 'Technologies' },
  { value: '∞', label: 'Always Learning' },
]

const services = [
  {
    icon: FaReact,
    color: '#61DAFB',
    title: 'Web Development',
    description:
      'Building responsive, performant web apps with modern frameworks like React and Next.js.',
  },
  {
    icon: FaAndroid,
    color: '#3DDC84',
    title: 'Mobile Development',
    description:
      'Crafting native Android apps with Java and Room DB for smooth, reliable experiences.',
  },
  {
    icon: FaBrain,
    color: '#FF6B6B',
    title: 'AI & Machine Learning',
    description:
      'Integrating LLMs, NLP, and intelligent automation to build smarter applications.',
  },
  {
    icon: SiNestjs,
    color: '#E0234E',
    title: 'Backend Development',
    description:
      'Designing secure, scalable REST APIs with NestJS, FastAPI, and PostgreSQL.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function About() {
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24 md:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm dark:border-bg/5 dark:bg-ink"
      >
        <div className="grid grid-cols-1 items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={item} className="px-5 text-left sm:px-0">
            <h2 className="relative inline-block font-dm-serif text-3xl text-ink sm:text-4xl dark:text-bg">
              About Me
              <svg
                viewBox="0 0 160 16"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <path
                  d="M2 11 Q 20 2, 40 11 T 80 11 T 120 11 T 158 11"
                  fill="none"
                  stroke="#f5a623"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </h2>

            <p className="mt-8 leading-relaxed text-ink/70 dark:text-bg/70">
              I'm Zahraa Mannoun, a Full-Stack Software Engineer based in
              Beirut, Lebanon, holding a Master's degree in Business Computer
              Science. I specialize in building scalable, secure, and
              intelligent web applications using modern technologies like
              React, Next.js, NestJS, FastAPI, and PostgreSQL with a strong
              focus on clean architecture and real-world impact.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70 dark:text-bg/70">
              I build full-cycle digital products from crafting responsive
              frontends and designing robust backend APIs to integrating
              AI-powered features. I enjoy turning complex problems into
              elegant, user-friendly solutions and writing clean, maintainable
              code that scales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative h-64 sm:h-56">
              <AnimatePresence mode="wait">
                {(() => {
                  const { icon: Icon, color, title, description } = services[activeService]
                  return (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -32 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#e2e1e8] bg-white p-8 text-center shadow-md dark:border-white/10 dark:bg-[#1a1a2e]"
                    >
                      <Icon className="text-4xl" style={{ color }} />
                      <h4 className="mt-4 text-base font-semibold text-ink dark:text-bg">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-bg/70">
                        {description}
                      </p>
                    </motion.div>
                  )
                })()}
              </AnimatePresence>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  aria-label={`Show ${service.title}`}
                  onClick={() => setActiveService(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeService
                      ? 'w-6 bg-accent'
                      : 'w-2.5 bg-ink/20 hover:bg-ink/40 dark:bg-bg/20 dark:hover:bg-bg/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-12">
          <div className="grid grid-cols-4 divide-x divide-[#f0e8d0] overflow-hidden rounded-2xl border border-[#f0e8d0] bg-[#faf3e0] dark:divide-bg/10 dark:border-bg/10 dark:bg-bg/5">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-2 py-6 text-center sm:px-6 sm:py-8">
                <p className="font-sans text-2xl font-extrabold text-ink sm:text-4xl dark:text-bg">
                  {value}
                </p>
                <p className="mt-1 text-[10px] text-gray-500 sm:text-sm dark:text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
