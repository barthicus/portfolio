import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'bg-gray-900 leading-relaxed text-slate-400 font-sans antialiased relative',
          'selection:bg-teal-300 selection:text-teal-900',
          [inter.variable]
        )}
      >
        <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(600px_at_10%_100px,_rgba(29,78,216,0.15),_transparent_80%)] transition duration-300" />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main className="pt-24 lg:w-1/2 lg:py-24">
              {children} <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
