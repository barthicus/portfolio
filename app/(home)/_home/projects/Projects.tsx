import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { projects } from './projectsData'

export const Projects = () => {
  const featuredProjects = projects
    .filter(({ isFeatured, isVisible }) => isFeatured && isVisible)
    .toSorted((a, b) => {
      // sort by year and month
      // date format: "MM/YYYY"
      const aDate = a.date.split('/') as [string, string]
      const bDate = b.date.split('/') as [string, string]

      if (aDate.length !== 2 || bDate.length !== 2) return 0

      return Number(bDate[1]) - Number(aDate[1]) || Number(bDate[0]) - Number(aDate[0])
    })

  return (
    <section data-section id="projects" className="mb-16 scroll-mt-16 space-y-10 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Projects<span className="text-teal-400">.</span>
      </h2>
      {featuredProjects.map(({ title, description, intro, link, slug, industry, image, tags }) => (
        <a
          href={link}
          target="_blank"
          className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4"
          key={slug}
        >
          <div
            className={cn(
              'absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block',
              {
                'lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg':
                  link
              }
            )}
          />
          <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {image ? <Image src={image} alt={title} className="rounded-sm border-2 border-white/20" /> : industry}
          </div>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div
                className={cn('inline-flex items-baseline text-base font-medium leading-tight text-slate-200', {
                  'group-hover:text-teal-400': link
                })}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span className="flex items-center gap-3">
                  {title}{' '}
                  {link && <FaExternalLinkAlt className="text-xs font-extralight opacity-30 group-hover:opacity-100" />}
                </span>
              </div>
            </h3>
            <div className="mt-2 text-sm leading-normal">{description}</div>
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
        </a>
      ))}
      <Link
        href="/all-projects"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200/20 p-3 text-xs font-medium leading-tight text-slate-200 transition-colors hover:text-teal-400 sm:text-sm"
      >
        Check all projects <FaArrowRight className="text-xs" />
      </Link>
    </section>
  )
}
