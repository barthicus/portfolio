import { ReactNode } from 'react'

import { Footer } from './_layout/Footer'
import { Header } from './_layout/Header/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        {children} <Footer />
      </main>
    </div>
  )
}
