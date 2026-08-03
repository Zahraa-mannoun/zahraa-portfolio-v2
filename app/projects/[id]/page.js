'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Calendar,
  Info,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import { projects, gradientMap } from '@/data/projects'
import { getTechIcon } from '@/data/techIcons'

const Divider = () => <div className="my-6 h-px bg-[#e2e1e8] dark:bg-gray-700" />

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [slideIndex, setSlideIndex] = useState(0)

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="mx-auto flex max-w-6xl flex-col items-center bg-[#f7f6f2] px-6 py-32 text-center">
          <h1 className="font-dm-serif text-3xl text-ink">Project not found</h1>
          <Link
            href="/#projects"
          scroll={false}
          onClick={() => sessionStorage.setItem('scrollTarget', 'projects')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <ArrowLeft size={15} />
            Back to all projects
          </Link>
        </div>
      </>
    )
  }

  // Always at least one "slide" so the carousel shell (arrows + dots) renders
  // even when there are no real images yet — that slide is just the placeholder.
  const slides = project.images.length > 0 ? project.images : [null]
  const nextSlide = () => setSlideIndex((i) => (i + 1) % slides.length)
  const prevSlide = () => setSlideIndex((i) => (i - 1 + slides.length) % slides.length)

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-[#f7f6f2] px-6 py-16 dark:bg-[#0f0f13] md:px-12"
      >
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#projects"
          scroll={false}
          onClick={() => sessionStorage.setItem('scrollTarget', 'projects')}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-accent dark:text-gray-300 dark:hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr_1.4fr] lg:gap-10">
          {/* LEFT — identity, actions, meta */}
          <div className="dark:rounded-2xl dark:bg-gray-900 dark:p-6 dark:shadow-lg">
            <h1 className="font-dm-serif text-3xl text-ink sm:text-4xl dark:text-white">
              {project.name}
            </h1>

            {project.internship ? (
              <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-bg">
                Internship Project @ {project.company}
              </span>
            ) : (
              project.badge && (
                <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-bg">
                  {project.badge}
                </span>
              )
            )}

            <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Live Demo
                  <ArrowRight size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-gray-600 dark:text-white dark:hover:border-accent dark:hover:text-accent"
                >
                  <FaGithub size={15} />
                  View Code
                </a>
              )}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#e2e1e8] pt-6 dark:border-gray-700">
              <div>
                <Clock className="text-accent" size={17} />
                <p className="mt-2 text-xs font-semibold text-ink sm:text-sm dark:text-white">
                  {project.duration}
                </p>
                <p className="text-[11px] text-ink/50 dark:text-gray-400">Duration</p>
              </div>
              <div>
                <User className="text-accent" size={17} />
                <p className="mt-2 text-xs font-semibold text-ink sm:text-sm dark:text-white">
                  {project.role}
                </p>
                <p className="text-[11px] text-ink/50 dark:text-gray-400">Role</p>
              </div>
              <div>
                <Calendar className="text-accent" size={17} />
                <p className="mt-2 text-xs font-semibold text-ink sm:text-sm dark:text-white">
                  {project.year}
                </p>
                <p className="text-[11px] text-ink/50 dark:text-gray-400">Year</p>
              </div>
            </div>
          </div>

          {/* CENTER — image carousel */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-[#f7f6f2] shadow-lg sm:h-[500px]">
            <AnimatePresence initial={false} mode="wait">
              {slides[slideIndex] ? (
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[slideIndex]}
                    alt={`${project.name} screenshot ${slideIndex + 1}`}
                    fill
                    priority={slideIndex === 0}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientMap[project.id] ?? 'from-accent to-[#241d66]'}`}
                >
                  <span className="px-6 text-center font-space-mono text-lg text-bg/80">
                    {project.name}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
            >
              <ChevronLeft size={18} className="text-ink" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
            >
              <ChevronRight size={18} className="text-ink" />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === slideIndex ? 'bg-accent' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — about, tech stack, what I learned */}
          <div>
            <div className="flex items-center gap-2">
              <Info className="text-accent" size={18} />
              <h2 className="text-lg font-semibold text-ink dark:text-gray-100">
                {project.highlightsTitle ?? 'About The Project'}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-gray-100">
              {project.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-ink/70 dark:text-gray-100"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <Divider />

            <h2 className="font-space-mono text-sm font-semibold text-accent">
              {'</>'} Tech Stack
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {project.stack.map((tech) => {
                const { icon: Icon, color } = getTechIcon(tech)
                return (
                  <div key={tech} className="flex flex-col items-center gap-2 text-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl dark:!bg-gray-800"
                      style={{ backgroundColor: `${color}26` }}
                    >
                      {Icon ? (
                        <Icon className="text-xl" style={{ color }} />
                      ) : (
                        <span
                          className="font-space-mono text-xs font-bold"
                          style={{ color }}
                        >
                          {tech.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-ink/70 dark:text-gray-300">{tech}</span>
                  </div>
                )
              })}
            </div>

            <Divider />

            <div className="flex items-center gap-2">
              <span aria-hidden="true">💡</span>
              <h2 className="text-lg font-semibold text-ink dark:text-gray-100">
                What I Learned
              </h2>
            </div>
            <ul className="mt-3 space-y-1.5">
              {project.learned.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-ink/70 dark:text-gray-100"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default ProjectDetail
