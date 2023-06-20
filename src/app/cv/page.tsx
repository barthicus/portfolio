import { PageTitle } from "../_components/PageTitle"
import { PageWrapper } from "../_components/PageWrapper"
import { TimeLine } from "../about-me/TimeLine"

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
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-zinc-500 dark:text-zinc-400">
                As a Polish Front-End Developer working in cooperation with Voltiso, a Polish
                startup, I build and maintain web applications using{" "}
                <strong className="text-zinc-600 dark:text-zinc-300">React</strong> and{" "}
                <strong className="text-zinc-600 dark:text-zinc-300">TypeScript</strong>.
              </p>
              <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                Lately I was working on web applications for medical clinics from United States like
                video-call solutions, virtual tradeshow CRMs and covid pass applications.
              </p>

              <TimeLine />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
