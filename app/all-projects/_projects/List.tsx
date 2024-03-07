import { Project } from '@/app/(home)/_home/projects/projectsData'

import { ListItem } from './ListItem'

export const List = ({ projects }: { projects: Project[] }) => {
  return (
    <table id="content" className="mt-12 w-full table-fixed border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr>
          <th className="w-16 py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 sm:w-60">Project</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
          <th className="hidden w-60 py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <ListItem key={project.title} project={project} />
        ))}
      </tbody>
    </table>
  )
}
