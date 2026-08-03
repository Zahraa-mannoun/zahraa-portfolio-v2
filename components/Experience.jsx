'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experienceEntries = [
  {
    date: 'June 2026 – July 2026',
    title: 'Software Developer Intern',
    org: 'Fekrat Al Youm Technologies',
    location: 'Remote, Dubai',
    points: [
      'Developed RESTful API endpoints with NestJS and TypeScript for yacht bookings, events, and restaurant reservations',
      'Built a full virtual wallet payment system with balance management, top-up flows, and transaction tracking',
      'Implemented dual authentication (cookie-based and JWT) across multiple backend modules',
      'Designed PostgreSQL schemas with Prisma ORM on Supabase including migrations and connection optimization',
      'Built responsive UI pages and reusable React components with Next.js and Tailwind CSS v4',
      'Implemented admin features including role management, user suspension, and a system audit log',
      'Collaborated in a team using Git branch-based workflow with defined module ownership',
    ],
  },
]

const educationEntries = [
  {
    date: '2024 – 2026',
    title: 'M.S. Business Computer Science',
    org: 'Lebanese University · Faculty of Economy and Business Administration',
    field: 'Business Computer Science',
  },
  {
    date: '2021 – 2024',
    title: 'B.S. Business Computer Science',
    org: 'Lebanese University · Faculty of Economy and Business Administration',
    field: 'Business Computer Science',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Timeline({ entries }) {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.85', 'end 0.6'],
  })

  return (
    <div ref={trackRef} className="relative mt-8">
      <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-ink/10 dark:bg-bg/10 sm:left-5" />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-4 top-0 h-full w-px -translate-x-1/2 origin-top bg-accent sm:left-5"
      />

      <div className="flex flex-col gap-8 sm:gap-10">
        {entries.map((entry) => (
          <motion.div
            key={entry.title}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group grid grid-cols-[32px_1fr] gap-x-2 sm:grid-cols-[40px_1fr]"
          >
            <div className="relative flex justify-center pt-1.5">
              <span className="absolute h-3.5 w-3.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-75" />
              <span className="relative h-3 w-3 rounded-full bg-accent ring-4 ring-bg dark:ring-ink" />
            </div>

            <div className="pb-2">
              <span className="font-space-mono text-xs uppercase tracking-wider text-accent">
                {entry.date}
              </span>
              <h4 className="mt-2 text-base font-semibold text-ink sm:text-lg dark:text-bg">
                {entry.title}
              </h4>
              <p className="mt-1 text-sm text-ink/60 dark:text-bg/60">
                {entry.org}
                {entry.location ? ` · ${entry.location}` : ''}
              </p>
              {entry.field && (
                <p className="mt-0.5 text-sm text-ink/50 dark:text-bg/50">
                  Field of study: {entry.field}
                </p>
              )}

              {entry.points && (
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink/70 dark:text-bg/70"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30 dark:bg-bg/30" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center font-dm-serif text-3xl text-ink sm:text-4xl md:text-5xl dark:text-bg"
      >
        Experience &amp; Education
      </motion.h2>

      <div className="mx-auto mt-14 max-w-3xl">
        <div>
          <div className="flex items-center gap-2">
            <GraduationCap className="text-accent" size={22} />
            <h3 className="text-xl font-semibold text-ink dark:text-bg">
              Education
            </h3>
          </div>
          <Timeline entries={educationEntries} />
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-2">
            <Briefcase className="text-accent" size={22} />
            <h3 className="text-xl font-semibold text-ink dark:text-bg">
              Experience
            </h3>
          </div>
          <Timeline entries={experienceEntries} />
        </div>
      </div>
    </section>
  )
}

export default Experience
