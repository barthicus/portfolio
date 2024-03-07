import Image from 'next/image'
import { LuExternalLink } from 'react-icons/lu'

import { Project } from '@/app/(home)/_home/projects/types'
import { cn } from '@/lib/utils'

export const Grid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className={cn('grid gap-20 grid-cols-3 items-start')}>
      {projects.map(({ title, date, year, tags, link, description, image }) => (
        <div
          key={title}
          className={cn('grid grid-cols-12 items-center gap-3 col-span-3', {
            'lg:col-span-1': year < 2019
          })}
        >
          <div
            className={cn('order-2 col-span-12', {
              'lg:col-start-1 lg:col-end-7 lg:order-1 lg:row-start-1 lg:row-end-[-1]': year >= 2019,
              'col-span-12': year < 2019
            })}
          >
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
            <div className="relative z-10 my-4 rounded-md bg-slate-800/95 p-6 text-sm text-slate-300 shadow-md">
              {description}
            </div>
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
              'group col-span-12 order-1 lg:order-1 rounded-md relative duration-500',
              'hover:shadow-2xl hover:bg-transparent',
              'before:content-[""] before:rounded-md before:absolute before:inset-0 before:z-[3] before:transition-all duration-500  before:size-full before:mix-blend-color before:bg-zinc-700/60',
              'hover:before:bg-transparent hover:before:filter-none',
              {
                'lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1]': year >= 2019,
                'col-span-12': year < 2019
              }
            )}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                placeholder="blur"
                className={cn('rounded-md object-cover max-h-40 w-full lg:max-h-none')}
              />
            ) : (
              <p>no image</p>
            )}
          </a>
        </div>
      ))}
    </div>
  )
}
