import Link from "next/link"

import { PageTitle } from "./_components/PageTitle"
import { PageWrapper } from "./_components/PageWrapper"

export const runtime = "edge"

export default function Home() {
  return (
    <PageWrapper>
      <div className="px-6 py-12 sm:px-5 md:px-10 lg:px-14">
        <PageTitle>Hello, I&apos;m Bartek!</PageTitle>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="leading-7 text-zinc-500 dark:text-zinc-400">
                I&apos;m Frontend Developer from Krotoszyn, Poland, working mostly in web
                development. I enjoy turning complex problems into simple, beautiful and intuitive
                designs. [{" "}
                <Link href="/about-me" className="text-red-400 hover:text-red-500">
                  More about me...
                </Link>{" "}
                ]
              </p>
              <p className="mt-2.5 leading-7 text-zinc-500 dark:text-zinc-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="px-6 pb-12 sm:px-5 md:px-10 lg:px-14 ">
        <h2 className="pb-5 text-[35px] font-medium dark:text-white">What I do!</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-1.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Ui/Ux Design</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-2.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">App Development</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-3.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="p-10 dark:bg-transparent">
            {/* <img
              alt="icon"
              src="/images/icons/icon-4.svg"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 object-contain block"
              loading="lazy"
            /> */}
            <div className="space-y-2 break-all">
              <h3 className="text-xl font-semibold dark:text-white">Photography</h3>
              <p className=" leading-8 text-gray-500 dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
