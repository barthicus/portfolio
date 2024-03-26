import { projects } from '@/app/(home)/_home/projects/projectsData'

import { Header } from '../Header'
import { List } from './List'

export const metadata = {
  title: 'All Projects (list view) - Bartosz Podgruszecki',
  description: 'A list of all the projects I have worked on.'
}

export default function AllProjects() {
  return (
    <div className="space-y-16 lg:py-24">
      <Header view="list" />
      <List projects={projects} />
    </div>
  )
}
