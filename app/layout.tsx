import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Muhammad Nazar Gunawan - Web and Mobile App Developer',
    template: '%s | Muhammad Nazar Gunawan - Developer',
  },
  description: 'Web and Mobile App Developer specializing in Codeigniter 4, React-Native, Flutter, Next.js, and Nest.js. Available for remote work worldwide.',
  openGraph: {
    title: 'Muhammad Nazar Gunawan - Web and Mobile App Developer',
    description: 'Web and Mobile App Developer specializing in Codeigniter 4, React-Native, Flutter, Next.js, and Nest.js. Available for remote work worldwide.',
    url: baseUrl,
    siteName: 'Muhammad Nazar Gunawan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
