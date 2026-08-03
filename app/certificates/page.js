'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'

const cert1 = '/assets/certificates/Screenshot_2026-08-01_192155.png'
const cert2 = '/assets/certificates/Screenshot_2026-08-01_192245.png'
const cert3 = '/assets/certificates/WhatsApp_Image_2026-01-29_at_8.36.21_PM.jpeg'

const certificates = [cert1, cert2, cert3]

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
