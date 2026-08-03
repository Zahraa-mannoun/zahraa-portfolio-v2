import { DM_Serif_Display, Inter, Space_Mono } from 'next/font/google'
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
  title: 'Zahraa Mannoun — Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer based in Beirut, Lebanon.',
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
      className={`${inter.variable} ${dmSerifDisplay.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
