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
              <div className="relative col-span-12 lg:col-span-8">
                <Header />
                <main
                  className={clsx(
                    "relative overflow-hidden bg-white dark:bg-[#111111] lg:rounded-2xl",
                    "after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-full after:bg-[linear-gradient(90deg,_#05bf85_0%,_#05bf85_10%,_#159f85_10%,_#159f85_20%,_#15709f_20%,_#15709f_30%,_#15569f_30%,_#15569f_40%,_#152c9f_40%,_#152c9f_50%,_#6038c5_50%,_#6038c5_60%,_#ae4add_60%,_#ae4add_70%,_#dd4a96_70%,_#dd4a96_80%,_#dd4a54_80%,_#dd4a54_90%,_#dd814a_90%,_#dd814a_100%)] after:content-['']",
                  )}
                >
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
