import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { careerSteps } from './experienceData'

export const Experience = () => {
  return (
    <section data-section id="experience" className="mb-16 scroll-mt-16 space-y-10 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Experience<span className="text-teal-400">.</span>
      </h2>
      {careerSteps.map(({ time, description, tags, title }) => (
        <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4" key={time}>
          <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={time}
          >
            {time}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>{title}</span>
              </div>
              {/* {subtitle && (
                <div className="text-slate-500" aria-hidden="true">
                  {subtitle}
                </div>
              )} */}
            </h3>
            <p className="mt-2 text-sm leading-normal">{description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {tags.map(tag => (
                <li className="mr-1.5 mt-2" key={tag}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <Link
        href="/cv-pdf"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200/20 p-3 text-xs font-medium leading-tight text-slate-200 transition-colors hover:text-teal-400 sm:text-sm"
        target="_blank"
      >
        Check my CV <FaExternalLinkAlt className="text-xs" />
      </Link>
    </section>
  )
}
