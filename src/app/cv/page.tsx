import Link from "next/link"

import { PageTitle } from "../_components/PageTitle"
import { PageWrapper } from "../_components/PageWrapper"
import { TimeLine } from "./TimeLine"

export const runtime = "edge"

export const metadata = {
  title: "CV - Bartosz Podgruszecki",
  description:
    "I'm a Polish Front-End Developer building and maintaining web applications using React and TypeScript.",
}

export default function CV() {
  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>CV</PageTitle>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 flex flex-col space-y-2.5">
            <p className="text-zinc-500 dark:text-zinc-400">
              This is my resume with some projects I&apos;ve worked on. You can also download it as
              a{" "}
              <Link
                href="/cv-pdf"
                target="_blank"
                className="text-teal-500 underline hover:text-black dark:hover:text-white"
              >
                PDF file
              </Link>
              .
            </p>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Featured projects are hidden by default but you can show them by clicking on the
              &quot;Reveal projects&quot; button below.
            </p>

            <TimeLine />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
