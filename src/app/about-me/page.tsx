import { FaCode } from "react-icons/fa"
import { GiRun } from "react-icons/gi"
import { MdTimeline } from "react-icons/md"

import { PageTitle } from "../_components/PageTitle"
import { PageWrapper } from "../_components/PageWrapper"
import { figmaLogo, nextjsLogo, planetscaleLogo, tailwindLogo } from "./stackLogos"
import { TimeLine } from "./TimeLine"

export const runtime = "edge"

export const metadata = {
  title: "About Me - Bartosz Podgruszecki",
  description:
    "I'm a Polish Front-End Developer building and maintaining web applications using React and TypeScript.",
}

export default function AboutMe() {
  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>About Me</PageTitle>
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

              <div className="mt-10 flex gap-3">
                <FaCode className="m-6 shrink-0 self-start text-3xl opacity-20" />
                <div>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    Preferred stack<span className="pl-1 text-3xl font-bold text-red-500">.</span>
                  </h2>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    For my next projects, I prefer to choose (if applicable){" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">Next.js</strong> with{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">TypeScript</strong>
                    and <strong className="text-zinc-600 dark:text-zinc-300">TailwindCSS</strong>.
                    I&apos;m also using Vercel for hosting and Planetscale for the database.
                  </p>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    When it comes to the{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">UI</strong>, I&apos;m using{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">Figma</strong> for
                    designing and prototyping.
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-10 opacity-30">
                    {nextjsLogo}
                    {planetscaleLogo}
                    {tailwindLogo}
                    {figmaLogo}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                <MdTimeline className="m-6 shrink-0 self-start text-3xl opacity-20" />
                <div>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    My developer path<span className="pl-1 text-3xl font-bold text-red-500">.</span>
                  </h2>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    I started my journey with web development in 2009 by designing and building
                    simple landing pages with{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">WordPress</strong> and
                    basic scripts like product price calculators in JavaScript -{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">jQuery</strong>. I even
                    created few websites in{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">Flash</strong> (AS3) which
                    is considered as a history relic now 🦕
                  </p>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    Then I continueed to develop my skills by reating custom web layouts, building
                    more complex websites like{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">CRMs</strong> in{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">PHP</strong>. I created few
                    projects with 3D interactions using{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">ThreeJS</strong> and{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">Vue.js</strong> (steel
                    constructions creators).
                  </p>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    From the beggining, I went through many different technologies (PHP, Action
                    Script) and frameworks/libs (jQuery, Gatsby, Vue.js), but most of the time I was
                    interested the most in the{" "}
                    <strong className="text-zinc-600 dark:text-zinc-300">
                      Frontend Development
                    </strong>
                    .
                  </p>
                  {/* <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    If you are interested in my developer history please check the timeline below.
                  </p>
                  <TimeLine /> */}
                  <p>Please check: </p>
                  <button className="mt-4 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l">
                    CV
                  </button>
                  <button className="mt-4 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l">
                    Projects
                  </button>
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                <GiRun className="m-6 shrink-0 self-start text-3xl opacity-20" />
                <div>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    Hobby and life outside of work
                    <span className="pl-1 text-3xl font-bold text-red-500">.</span>
                  </h2>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    Family is everything to me so I spend most of my free time with my two kids and
                    my lovely wife ❤️ Outside of that, I really enjoy cooking, running and
                    calisthenics.
                  </p>
                  <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    If I can I really like watching esports matches while cheering for my favorite
                    teams.
                  </p>
                  <p className="mt-4 text-zinc-300 dark:text-zinc-600">
                    When everyone is sleeping I definitely don&apos;t slain any demons in Diablo 2.
                    Nope. Not at all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
