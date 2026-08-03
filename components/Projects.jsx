'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight, ChevronRight, ExternalLink, FolderCheck, Layers, Clock } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, gradientMap } from '@/data/projects'

const stats = [
  { icon: FolderCheck, value: '10+', label: 'Projects Completed' },
  { icon: Layers, value: '20+', label: 'Technologies Mastered' },
  { icon: Clock, value: '1000+', label: 'Hours of Coding' },
]

const filters = ['All Projects', 'Web Apps', 'Mobile Apps', 'AI/ML', 'Full Stack']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ project }) {
  const router = useRouter()

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => router.push(`/projects/${project.id}`)}
      className="w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-[#e2e1e8] bg-white shadow-md transition-colors hover:border-accent dark:border-gray-700 dark:bg-gray-900 sm:w-[320px]"
    >
      {project.images[0] ? (
        <div className="relative aspect-video w-full">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            sizes="(min-width: 640px) 320px, 280px"
            className="rounded-t-2xl object-cover"
          />
        </div>
      ) : (
        <div
          className={`flex aspect-video items-center justify-center rounded-t-2xl bg-gradient-to-br ${gradientMap[project.id]}`}
        >
          <span className="px-4 text-center font-space-mono text-sm text-bg/80">
            {project.name}
          </span>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink dark:text-white">{project.name}</h3>
        <p className="mt-1.5 line-clamp-1 text-sm text-ink/70 dark:text-gray-300">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/10 px-2.5 py-1 font-space-mono text-[11px] text-ink/60 dark:border-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-full border border-ink/10 bg-ink/5 px-2.5 py-1 font-space-mono text-[11px] text-ink/40 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400">
              +{project.stack.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#e2e1e8] pt-4 dark:border-gray-700">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-ink/70 transition-colors hover:text-accent dark:text-gray-300"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span />
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-ink/70 transition-colors hover:text-accent dark:text-gray-300"
            >
              <FaGithub size={13} />
              GitHub
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const scrollRef = useRef(null)
  const gridSectionRef = useRef(null)

  const visibleProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter))

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })
  }

  const handleViewAllProjects = () => {
    setActiveFilter('All Projects')
    gridSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 sm:py-24 md:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-space-mono text-xs font-semibold uppercase tracking-wider text-accent">
            My Work
          </span>
          <h2 className="mt-3 text-balance font-dm-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-4xl xl:text-5xl dark:text-white">
            Projects that <span className="text-accent">make an impact</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70 dark:text-gray-300">
            Here are some of the projects I've worked on. Each one taught me
            something new and helped me grow as a developer.
          </p>

          <button
            type="button"
            onClick={handleViewAllProjects}
            className="mt-7 flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View All Projects
            <ArrowRight size={15} />
          </button>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e1e8] pt-8 dark:border-gray-700">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="text-accent" size={20} />
                <p className="mt-2 font-dm-serif text-2xl text-ink sm:text-3xl dark:text-white">
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-ink/60 sm:text-sm dark:text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="min-w-0" ref={gridSectionRef}>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  activeFilter === filter
                    ? 'bg-accent text-bg'
                    : 'border border-ink/10 text-ink/70 hover:border-accent hover:text-accent dark:border-gray-600 dark:text-gray-300 dark:hover:border-accent dark:hover:text-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative mt-6">
            <motion.div
              key={activeFilter}
              ref={scrollRef}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 overflow-x-auto pb-4"
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Scroll projects right"
              className="absolute -right-3 top-[calc(50%-1rem)] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white sm:flex"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
