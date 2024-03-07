import Link from 'next/link'
import { FaList } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import { TfiLayoutGrid2Alt } from 'react-icons/tfi'

import { projects } from '@/app/(home)/_home/projects/projectsData'
import { cn } from '@/lib/utils'

import { Grid } from './_projects/Grid'
import { List } from './_projects/List'

export const metadata = {
  title: 'All Projects - Bartosz Podgruszecki',
  description: 'A list of all the projects I have worked on.'
}

type SearchParams = {
  view: 'grid' | 'list'
}
export default function AllProjects({ searchParams }: { searchParams: SearchParams }) {
  const view = searchParams.view || 'grid'

  const header = (
    <div className="flex items-center justify-between gap-5">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects<span className="text-teal-400">.</span>
      </h1>
      <div className="flex items-center gap-2">
        <p className="text-slate-300">View:</p>
        <Link
          href="/all-projects?view=grid"
          className={cn('bg-slate-800/95 rounded-md p-2 text-slate-300 hover:bg-slate-700 transition', {
            'bg-teal-500 text-slate-800 hover:bg-teal-600': view === 'grid'
          })}
          title='Click to view as "Grid"'
        >
          <TfiLayoutGrid2Alt />
        </Link>
        <Link
          href="/all-projects?view=list"
          className={cn('bg-slate-800/95 rounded-md p-2 text-slate-300 hover:bg-slate-700 transition', {
            'bg-teal-500 text-slate-800 hover:bg-teal-600': view === 'list'
          })}
          title='Click to view as "List"'
        >
          <FaList />
        </Link>
      </div>
      <Link
        className="group inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-500"
        href="/"
      >
        <GoArrowRight className="mr-1 size-4 rotate-180 transition-transform group-hover:-translate-x-2" />
        Back to home
      </Link>
    </div>
  )

  return (
    <div className="space-y-16 lg:py-24">
      {header}

      {view === 'grid' ? <Grid projects={projects} /> : <List projects={projects} />}
    </div>
  )
}
