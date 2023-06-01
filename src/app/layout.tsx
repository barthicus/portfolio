import { ReactNode } from "react"
import { Poppins, Roboto_Slab } from "next/font/google"
import clsx from "clsx"

import { Aside } from "./_components/Aside"
import { Header } from "./_components/Header"
import { Providers } from "./_components/providers"

import "./globals.css"

const robotSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "Bartosz Podgruszecki",
  description: "Hi! I'm Bartosz Podgruszecki, FrontEnd Developer from Poland.",
}

const year = new Date().getFullYear()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // Uncomment this line when the issue with next-themes is fixed
    // https://github.com/pacocoursey/next-themes/issues/152
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "relative bg-[url('/img/triangle-bg.svg')]",
          "before:content:[''] before:fixed before:inset-0 ",
          "before:bg-white before:mix-blend-difference",
          "dark:before:bg-transparent dark:before:bg-gradient-to-bl dark:before:from-[#00000047] dark:before:to-transparent dark:before:mix-blend-normal",
          [robotSlab.variable, poppins.variable],
        )}
      >
        <Providers>
          <section className="relative min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat font-mono md:pb-16">
            <div className="container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px]">
              <div className="top-44 col-span-12 lg:sticky lg:col-span-4 lg:h-screen">
                <Aside />
              </div>
              <div className="col-span-12 lg:col-span-8">
                <Header />
                <main className="bg-white dark:bg-[#111111] lg:rounded-2xl">
                  <div>
                    {children}
                    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-zinc-800">
                      <div className="container">
                        <p className="py-6 text-center text-sm text-gray-400 dark:text-gray-500">
                          © {year} All Rights Reserved by{" "}
                          <span className="text-gray-500 dark:text-gray-400">
                            Bartosz Podgruszecki
                          </span>
                        </p>
                      </div>
                    </footer>
                  </div>
                </main>
              </div>
            </div>
          </section>
        </Providers>
      </body>
    </html>
  )
}
