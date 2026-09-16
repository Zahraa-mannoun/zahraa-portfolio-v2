'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'

const cert1 = '/assets/certificates/cert1_kanz_ai_hackathon.png'
const cert2 = '/assets/certificates/cert2_alathea_academy_forensics.png'
const cert3 = '/assets/certificates/cert3_semicolon_security_hackers.jpeg'
const cert4 = '/assets/certificates/cert4_anthropic_claude101.png'
const cert5 = '/assets/certificates/cert5_brinicle_ai_internship.png'
const cert6 = '/assets/certificates/cert6_anthropic_claude_cowork.png'
const cert7 = '/assets/certificates/cert7_fekrat_al_youm_internship.jpeg'
const cert8 = '/assets/certificates/cert8_cedar_digital_ai_workshop.webp'

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Certificates() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f6f2] px-6 py-16 dark:bg-gray-950 sm:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-75 dark:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 text-center"
          >
            <h1 className="relative inline-block font-dm-serif text-3xl text-ink sm:text-4xl md:text-5xl dark:text-white">
              My Certificates
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-accent" />
            </h1>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certificates.map((src, index) => (
              <motion.a
                key={src}
                href={src}
                target="_blank"
                rel="noreferrer"
                variants={card}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex items-center justify-center rounded-2xl border border-[#e2e1e8] bg-white p-3 shadow-md transition-colors hover:border-accent dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="rounded-lg object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Certificates
