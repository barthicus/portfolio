import { ButtonLink } from '@/components/ButtonLink'
import { PageTitle } from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'

export const runtime = 'edge'

export const metadata = {
  title: 'Bartosz Podgruszecki FrontEnd Developer',
  description: "Hi! I'm Bartosz Podgruszecki, FrontEnd Developer from Poland."
}

export default function Home() {
  return (
    <PageWrapper>
      <div className="px-6 py-12 sm:px-5 md:px-10 lg:px-14">
        <PageTitle>Hello, I&apos;m Bartek!</PageTitle>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div className="space-y-6">
              <p className="leading-7 text-zinc-500 dark:text-zinc-400">
                I&apos;m <strong>Software Engineer</strong> from Krotoszyn, Poland, working mostly in web development. I
                enjoy turning complex problems into performant and beautiful applications.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                Lately I was working on web applications for medical clinics from United States like video-call
                solutions, virtual tradeshow CRMs and covid pass applications.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                That&apos;s about it from me. Feel free to browse through the other pages to get to know me better!
              </p>
              <ButtonLink href="/about-me" icon="about-me">
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="px-6 pb-12 sm:px-5 md:px-10 lg:px-14 ">
        <h2 className="pb-5 text-[35px] font-medium dark:text-white">What I do!</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="p-10 dark:bg-transparent">
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">App Development</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </PageWrapper>
  )
}
