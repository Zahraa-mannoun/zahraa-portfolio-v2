'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaReact, FaAndroid, FaJava } from 'react-icons/fa'
import { DiMsqlServer } from 'react-icons/di'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiNestjs,
  SiFastapi,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiPython,
  SiGit,
  SiDocker,
  SiC,
  SiCplusplus,
  SiFirebase,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiSharp,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiSqlite,
  SiPostman,
} from 'react-icons/si'

const skills = [
  { name: 'React', category: 'Frontend', icon: FaReact, color: '#61DAFB' },
  { name: 'React Native', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', category: ['Frontend', 'Backend'], icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', category: ['Frontend', 'Backend'], icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, neutral: true },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', icon: SiCss, color: '#1572B6' },
  { name: 'shadcn/ui', category: 'Frontend', icon: SiShadcnui, neutral: true },
  { name: 'Android/Java', category: 'Frontend', icon: FaAndroid, color: '#3DDC84' },
  { name: 'NestJS', category: 'Backend', icon: SiNestjs, color: '#E0234E' },
  { name: 'FastAPI', category: 'Backend', icon: SiFastapi, color: '#009688' },
  { name: 'Socket.IO', category: 'Backend', icon: SiSocketdotio, neutral: true },
  { name: 'C', category: 'Backend', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', category: 'Backend', icon: SiCplusplus, color: '#00599C' },
  { name: 'Java', category: 'Backend', icon: FaJava, color: '#ED8B00' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'C#', category: 'Backend', icon: SiSharp, color: '#239120' },
  { name: 'ASP.NET', category: 'Backend', icon: SiDotnet, color: '#512BD4' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', category: 'Database', icon: SiPrisma, neutral: true },
  { name: 'Supabase', category: 'Database', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Firebase', category: 'Database', icon: SiFirebase, color: '#FFCA28' },
  { name: 'SQL Server', category: 'Database', icon: DiMsqlServer, color: '#CC2927' },
  { name: 'SQLite', category: 'Database', icon: SiSqlite, color: '#003B57' },
  { name: 'Python', category: 'AI & Tools', icon: SiPython, color: '#3776AB' },
  { name: 'Git', category: 'AI & Tools', icon: SiGit, color: '#F05032' },
  { name: 'Docker', category: 'AI & Tools', icon: SiDocker, color: '#2496ED' },
  { name: 'Postman', category: 'AI & Tools', icon: SiPostman, color: '#FF6C37' },
]

const filters = ['All', 'Frontend', 'Backend', 'Database', 'AI & Tools']

const INITIAL_VISIBLE_COUNT = 18

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false)
  const { neutral, color } = skill

  return (
    <motion.div
      variants={card}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex h-20 w-20 flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border border-[#e2e1e8] bg-white p-1.5 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-md sm:h-24 sm:w-24 sm:gap-1.5 sm:p-2 md:h-28 md:w-28 lg:h-[130px] lg:w-[130px] dark:border-white/10 dark:bg-[#1a1a2e]"
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px] ${neutral ? 'bg-ink/[0.06] dark:bg-bg/10' : ''}`}
        style={neutral ? undefined : { backgroundColor: `${color}26` }}
      >
        <skill.icon
          className={`text-base sm:text-xl md:text-2xl lg:text-3xl ${neutral ? 'text-ink dark:text-bg' : ''}`}
          style={neutral ? undefined : { color }}
        />
      </div>
      <span
        className={`text-center text-[10px] font-medium sm:text-xs lg:text-sm ${neutral ? 'text-ink dark:text-bg' : ''}`}
        style={neutral ? undefined : { color }}
      >
        {skill.name}
      </span>

      <motion.span
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-center bg-accent"
      />
    </motion.div>
  )
}

function matchesFilter(skill, filter) {
  if (filter === 'All') return true
  const categories = Array.isArray(skill.category) ? skill.category : [skill.category]
  return categories.includes(filter)
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const visibleSkills = skills.filter((skill) => matchesFilter(skill, activeFilter))
  const isAllFilter = activeFilter === 'All'
  const hasMore = isAllFilter && visibleSkills.length > INITIAL_VISIBLE_COUNT
  const primarySkills = isAllFilter ? visibleSkills.slice(0, INITIAL_VISIBLE_COUNT) : visibleSkills
  const extraSkills = isAllFilter ? visibleSkills.slice(INITIAL_VISIBLE_COUNT) : []

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setShowAll(false)
  }

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="rounded-2xl border border-[#e2e1e8] bg-white p-4 shadow-sm sm:p-6 md:p-8 dark:border-white/10 dark:bg-[#1a1a2e]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e1e8] pb-4 dark:border-white/10">
          <span className="font-space-mono text-sm font-semibold text-accent">
            {'</>'} Skills &amp; Technologies
          </span>
          <span className="font-space-mono text-xs text-gray-400 dark:text-bg/50">
            {skills.length}+ technologies mastered
          </span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-1.5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-accent text-bg'
                  : 'border border-ink/10 text-ink/70 hover:border-accent hover:text-accent dark:border-bg/10 dark:text-bg/70'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid grid-cols-3 justify-items-center gap-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {primarySkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>

        <AnimatePresence initial={false}>
          {isAllFilter && showAll && extraSkills.length > 0 && (
            <motion.div
              key="extra-skills"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 justify-items-center gap-2 pt-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-6"
              >
                {extraSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasMore && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-accent px-6 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
