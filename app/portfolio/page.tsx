'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md'

import { Button } from '@/components/Button'
import { PageTitle } from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'

import { projects } from '../../data/projects'

export const runtime = 'edge'

// export const metadata = {
//   title: "Portfolio - Bartosz Podgruszecki",
//   description: "My portfolio.",
// }

// count tags and sort them by count
const techTags = projects.reduce((acc, project) => {
  project.tags.forEach(tag => {
    if (acc[tag]) {
      acc[tag]++
    } else {
      acc[tag] = 1
    }
  })
  return acc
}, {} as Record<string, number>)

// fitler out techTags with count less than 2
Object.entries(techTags).forEach(([tag, count]) => {
  if (count < 2) {
    delete techTags[tag]
  }
})

const sortedTechTags = Object.entries(techTags).sort((a, b) => b[1] - a[1])

// industryTags
const industryTags = projects.reduce((acc, project) => {
  if (acc[project.industry]) {
    acc[project.industry] += 1
  } else {
    acc[project.industry] = 1
  }
  return acc
}, {} as Record<string, number>)

export default function Portfolio() {
  const [areFiltersVisible, setAreFiltersVisible] = useState(false)
  const [selectedTechTags, setSelectedTechTags] = useState<string[]>([])
  const [selectedIndustryTags, setSelectedIndustryTags] = useState<string[]>([])

  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>Portfolio</PageTitle>
        <div className="pt-4">
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            List of my latest projects. Feel free to use filters to find something quickly.
          </p>

          <Button onClick={() => setAreFiltersVisible(areFiltersVisible => !areFiltersVisible)}>
            {areFiltersVisible ? 'Hide' : 'Show'} filters {areFiltersVisible ? <MdFilterAltOff /> : <MdFilterAlt />}
          </Button>
          <AnimatePresence initial={false}>
            {areFiltersVisible && (
              <motion.div
                className="mt-4 border-l-2 border-teal-500/50 pl-7"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: Number(areFiltersVisible), y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-4">
                  <p className="w-20 shrink-0">Tech:</p>
                  <div className="flex flex-wrap gap-2">
                    {sortedTechTags.map(([tag, count]) => (
                      <button
                        key={tag}
                        className={clsx('rounded-md bg-zinc-100 p-2 text-xs text-zinc-200 dark:bg-zinc-800', {
                          'bg-teal-500 text-black dark:bg-teal-500 dark:text-white': selectedTechTags.includes(tag)
                        })}
                        onClick={() =>
                          setSelectedTechTags(tags => {
                            if (tags.includes(tag)) {
                              return tags.filter(t => t !== tag)
                            } else {
                              return [...tags, tag]
                            }
                          })
                        }
                      >
                        {tag} ({count})
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <p className="w-20 shrink-0">Industry:</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(industryTags).map(([tag, count]) => (
                      <button
                        key={tag}
                        className={clsx('rounded-md bg-zinc-100 p-2 text-xs text-zinc-200 dark:bg-zinc-800', {
                          'bg-teal-500 text-black dark:bg-teal-500 dark:text-white': selectedIndustryTags.includes(tag)
                        })}
                        onClick={() =>
                          setSelectedIndustryTags(tags => {
                            if (tags.includes(tag)) {
                              return tags.filter(t => t !== tag)
                            } else {
                              return [...tags, tag]
                            }
                          })
                        }
                      >
                        {tag} ({count})
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map(project => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group grid grid-cols-3 items-start gap-4"
              >
                {project.images?.[0] ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className="rounded-md grayscale-[40%] transition-all group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : null}
                <div className="col-span-2">
                  <h2 className="text-teal-500 underline transition-all group-hover:text-black dark:group-hover:text-white">
                    {project.title}
                  </h2>
                  <div>
                    {/* <p>Desc: {project.description}</p> */}
                    {/* <p>Url: {project.link}</p> */}
                    <p className="text-sm text-zinc-400">{project.year}</p>
                    <p className="text-xs text-zinc-400">{project.tags.join(', ')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
