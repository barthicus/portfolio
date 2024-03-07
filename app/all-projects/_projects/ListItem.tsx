'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { Project } from '../../(home)/_home/projects/types'

const stripProtocol = (url?: string) => (url ? url.replace(/(^\w+:|^)\/\//, '') : '')

export const ListItem = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <tr
        className="group border-b border-slate-300/10 transition last:border-none hover:bg-slate-800/95"
        title="Click to expand or collapse the project details"
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        <td className="py-4 pr-4 align-top text-sm">
          <div className="relative translate-y-px">
            {project.year}{' '}
            <span
              className={cn('absolute left-[-25px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100', {
                'opacity-100': isExpanded
              })}
            >
              <FaChevronRight className={cn('w-4 h-4 transition transform', { 'rotate-90': isExpanded })} />
            </span>
          </div>
        </td>
        <th className="py-4 pr-8 align-top text-sm font-semibold text-slate-200">{project.title}</th>
        <td className="hidden py-4 pr-4 align-top lg:table-cell">
          <ul className="flex -translate-y-1.5 flex-wrap">
            {project.tags.map(tag => (
              <li className="my-1 mr-1.5" key={tag}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </td>
        <td className="hidden py-4 pr-4 align-top font-semibold leading-snug text-slate-200 sm:table-cell">
          {project.link ? (
            <a
              className="group/link inline-flex items-baseline gap-1 text-sm font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} (opens in a new tab)`}
            >
              <span className="whitespace-nowrap text-nowrap">{stripProtocol(project.link)} </span>
              <FaExternalLinkAlt className="-mt-1 ml-1 inline-block text-xs" aria-hidden="true" />
            </a>
          ) : (
            <div>{stripProtocol(project.link)}</div>
          )}
        </td>
      </tr>
      <AnimatePresence initial>
        {isExpanded && (
          <motion.tr
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-b border-slate-300/10 "
          >
            <>
              <td colSpan={4} className="hidden p-4 lg:table-cell">
                <div className="flex items-center justify-between gap-5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      placeholder="blur"
                      className={cn('rounded-md object-cover w-72')}
                    />
                  ) : (
                    <p className="flex h-48 w-72 items-center justify-center rounded-md bg-slate-700/10">no image</p>
                  )}
                  <div className="text-slate-300">{project.description}</div>
                </div>
              </td>
              <td colSpan={3} className="hidden p-4 sm:table-cell lg:hidden">
                <p className=" text-slate-300">{project.description}</p>
              </td>
              <td colSpan={2} className="table-cell p-4 sm:hidden">
                <p className=" text-slate-300">{project.description}</p>
              </td>
            </>
          </motion.tr>
        )}
      </AnimatePresence>
    </>
  )
}
