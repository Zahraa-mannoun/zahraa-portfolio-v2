'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send } from 'lucide-react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = 'service_3r3dkwf'
const EMAILJS_TEMPLATE_ID = 'template_vyc3feg'
const EMAILJS_PUBLIC_KEY = 'DZe9xJ1KznHnmZhep'

const WHATSAPP_HREF =
  'https://wa.me/96171524353?text=Hello%20Zahraa!%20I%20visited%20your%20portfolio%20and%20I%27d%20love%20to%20connect%20%F0%9F%91%8B'

const contactItems = [
  {
    icon: Mail,
    label: 'zahraa-mannoun@hotmail.com',
    href: 'mailto:zahraa-mannoun@hotmail.com',
  },
  {
    icon: MapPin,
    label: 'Beirut, Lebanon',
    href: null,
  },
  {
    icon: FaLinkedin,
    label: 'linkedin.com/in/zahraa-mannoun',
    href: 'https://www.linkedin.com/in/zahraa-mannoun/',
  },
  {
    icon: FaGithub,
    label: 'github.com/Zahraa-mannoun',
    href: 'https://github.com/Zahraa-mannoun',
  },
  {
    icon: FaWhatsapp,
    label: '+961 71 524 353',
    href: WHATSAPP_HREF,
  },
]

const inputClass =
  'w-full rounded-lg border border-[#e2e1e8] bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-[#0f0f1a] dark:text-bg dark:placeholder:text-bg/40'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function FieldError({ message }) {
  if (!message) return null
  return <p className="-mt-3 text-xs text-red-500">{message}</p>
}

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const clearError = (field) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const validate = (formData) => {
    const newErrors = {}
    const name = formData.get('from_name').trim()
    const email = formData.get('from_email').trim()
    const subject = formData.get('subject').trim()
    const message = formData.get('message').trim()

    if (!name) newErrors.from_name = 'Name is required'
    if (!email) newErrors.from_email = 'Email is required'
    else if (!EMAIL_REGEX.test(email)) newErrors.from_email = 'Please enter a valid email address'
    if (!subject) newErrors.subject = 'Subject is required'
    if (!message) newErrors.message = 'Message is required'

    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = validate(new FormData(formRef.current))
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-md sm:p-10 lg:grid-cols-2 lg:gap-14 dark:bg-[#1a1a2e]"
        >
          <div>
            <h2 className="font-dm-serif text-3xl text-ink sm:text-4xl dark:text-bg">
              Let's Work Together
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70 dark:text-bg/70">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology!
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-medium text-ink dark:text-bg">{label}</span>
                  </>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="flex items-center gap-3 transition-opacity hover:opacity-75"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              onChange={() => clearError('from_name')}
              className={inputClass}
            />
            <FieldError message={errors.from_name} />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              onChange={() => clearError('from_email')}
              className={inputClass}
            />
            <FieldError message={errors.from_email} />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={() => clearError('subject')}
              className={inputClass}
            />
            <FieldError message={errors.subject} />

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={() => clearError('message')}
              rows={5}
              className={`${inputClass} resize-none`}
            />
            <FieldError message={errors.message} />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm font-medium text-emerald-600">
                Message sent! I'll get back to you soon 💜
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-red-500">
                Something went wrong — please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
          <FaWhatsapp size={26} className="relative" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-bg opacity-0 transition-opacity group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  )
}

export default Contact
