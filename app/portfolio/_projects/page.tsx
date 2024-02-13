'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md'

import { Button } from '@/components/Button'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

// count tags and sort them by count
const techTags = projects.reduce(
  (acc, project) => {
    project.tags.forEach(tag => {
      if (acc[tag]) {
        acc[tag]++
      } else {
        acc[tag] = 1
      }
    })
    return acc
  },
  {} as Record<string, number>
)

// fitler out techTags with count less than 2
Object.entries(techTags).forEach(([tag, count]) => {
  if (count < 2) {
    delete techTags[tag]
  }
})

const sortedTechTags = Object.entries(techTags).sort((a, b) => b[1] - a[1])

// industryTags
const industryTags = projects.reduce(
  (acc, project) => {
    if (acc[project.industry]) {
      acc[project.industry] += 1
    } else {
      acc[project.industry] = 1
    }
    return acc
  },
  {} as Record<string, number>
)

export default function Projects() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // example url including many tech and industry tags:
  // /portfolio?tech=react&tech=next&industry=web%20development&industry=design
  const params = new URLSearchParams(searchParams.toString())
  const selectedTechTags = searchParams.getAll('tech')
  const selectedIndustryTags = searchParams.getAll('industry')

  const areFiltersVisibleInitial = selectedTechTags.length > 0 || selectedIndustryTags.length > 0
  const [areFiltersVisible, setAreFiltersVisible] = useState(areFiltersVisibleInitial)

  const handleSelectTech = (tech: string) => {
    // prepare new URL with selected tech
    if (selectedTechTags.includes(tech)) {
      const values = params.getAll('tech')
      const filteredValues = values.filter(value => value !== tech)
      params.delete('tech')
      if (filteredValues.length) {
        filteredValues.forEach(value => params.append('tech', value))
      }
    } else {
      params.append('tech', tech)
    }

    // navigate to new URL
    replace(`${pathname}?${params.toString()}`)
  }

  const handleSelectIndustry = (industry: string) => {
    // prepare new URL with selected industry
    if (selectedIndustryTags.includes(industry)) {
      const values = params.getAll('industry')
      const filteredValues = values.filter(value => value !== industry)
      params.delete('industry')
      if (filteredValues.length) {
        filteredValues.forEach(value => params.append('industry', value))
      }
    } else {
      params.append('industry', industry)
    }

    // navigate to new URL
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setAreFiltersVisible(areFiltersVisible => !areFiltersVisible)}>
          {areFiltersVisible ? 'Hide' : 'Show'} filters {areFiltersVisible ? <MdFilterAltOff /> : <MdFilterAlt />}
        </Button>
        {areFiltersVisibleInitial && (
          <Button isGhost onClick={() => replace(pathname)}>
            Reset filters
          </Button>
        )}
      </div>
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
                    className={cn('rounded-md bg-zinc-100 p-2 text-xs text-zinc-200 dark:bg-zinc-800', {
                      'bg-teal-500 text-black dark:bg-teal-500 dark:text-white': selectedTechTags.includes(tag)
                    })}
                    onClick={() => handleSelectTech(tag)}
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
                    className={cn('rounded-md bg-zinc-100 p-2 text-xs text-zinc-200 dark:bg-zinc-800', {
                      'bg-teal-500 text-black dark:bg-teal-500 dark:text-white': selectedIndustryTags.includes(tag)
                    })}
                    onClick={() => handleSelectIndustry(tag)}
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
    </>
  )
}
