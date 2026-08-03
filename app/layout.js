import { DM_Serif_Display, Inter, Space_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Zahraa Mannoun | Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer based in Beirut, Lebanon. Building web, mobile and AI applications with React, Next.js, NestJS, FastAPI and more.',
  keywords:
    'Zahraa Mannoun, Full-Stack Developer, Software Engineer, Beirut, Lebanon, React, NestJS, FastAPI, Python, Android',
  authors: [{ name: 'Zahraa Mannoun' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Zahraa Mannoun | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer based in Beirut, Lebanon.',
    url: 'https://www.zahraamannoun.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Zahraa Mannoun | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer based in Beirut, Lebanon.',
  },
  verification: {
    google: 'IBFNMsySn6zeO-6YNV_EIeVPX0_0BVP8DYbTFYATOc0',
  },
}

const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${dmSerifDisplay.variable} ${spaceMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
