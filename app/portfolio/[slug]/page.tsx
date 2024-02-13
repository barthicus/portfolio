import { notFound } from 'next/navigation'

import { PageTitle } from '@/components/PageTitle'
import { projects } from '@/data/projects'

type Props = {
  params: {
    slug: string
  }
}

export const generateMetadata = ({ params }: Props) => {
  const project = projects.find(project => project.slug === params.slug)
  return {
    title: `${project?.title || 'Project'} - Bartosz Podgruszecki`,
    description: project?.description
  }
}

export default function Project({ params }: Props) {
  const project = projects.find(project => project.slug === params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
      <PageTitle>{project.title}</PageTitle>
      <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
        <div className="col-span-12 space-y-2.5">
          <div>
            <p className="text-zinc-500 dark:text-zinc-400">{project.description}</p>
            <p className="text-zinc-500 dark:text-zinc-400">
              There will be a list of latest and old projects that I did in the past.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
