import Image from 'next/image'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { LuExternalLink } from 'react-icons/lu'

import { projects as allProjects } from '@/app/(home)/_home/projects/projectsData'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'All Projects - Bartosz Podgruszecki',
  description: 'A list of all the projects I have worked on.'
}

export default function AllProjects() {
  const projects = allProjects
    .toSorted((a, b) => {
      // sort by year and month
      // date format: "MM/YYYY"
      const aDate = a.date.split('/') as [string, string]
      const bDate = b.date.split('/') as [string, string]

      if (aDate.length !== 2 || bDate.length !== 2) return 0

      return Number(bDate[1]) - Number(aDate[1]) || Number(bDate[0]) - Number(aDate[0])
    })
    .filter(({ isVisible }) => isVisible)

  const header = (
    <div className="flex items-center justify-between gap-5">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects<span className="text-teal-400">.</span>
      </h1>
      <Link className="group inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
        <GoArrowRight className="mr-1 size-4 rotate-180 transition-transform group-hover:-translate-x-2" />
        Back to home
      </Link>
    </div>
  )

  return (
    <div className="space-y-16 lg:py-24">
      {header}

      <div className={cn('grid gap-16 grid-cols-2')}>
        {projects.map(({ title, date, year, tags, link, description, image }) => (
          <div
            key={title}
            className={cn('grid grid-cols-12 items-center gap-3 col-span-2', {
              'lg:col-span-1': year < 2019
            })}
          >
            <div className="col-start-1 col-end-7 row-start-1 row-end-[-1]">
              <p className="text-xs uppercase tracking-widest text-teal-400">{date}</p>
              <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-200 sm:text-xl">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    {title} <LuExternalLink className="inline-block font-light" />
                  </a>
                ) : (
                  title
                )}
              </h2>
              <p className="relative z-10 my-4 rounded-md bg-slate-800/95 p-6 text-sm text-slate-300 shadow-md">
                {description}
              </p>
              <ul className="mt-2 flex max-w-[80%] flex-wrap" aria-label="Technologies used">
                {tags.map(tag => (
                  <li className="mr-1.5 mt-2" key={tag}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {tag}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group col-start-6 col-end-[-1] row-start-1 row-end-[-1] rounded-md relative duration-500',
                'hover:shadow-2xl hover:bg-transparent',
                'before:content-[""] before:rounded-md before:absolute before:inset-0 before:z-[3] before:transition-all duration-500  before:size-full before:mix-blend-color before:bg-zinc-700/60',
                'hover:before:bg-transparent hover:before:filter-none'
              )}
            >
              {image ? <Image src={image} alt={title} className={cn('rounded-md')} /> : <p>no image</p>}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
