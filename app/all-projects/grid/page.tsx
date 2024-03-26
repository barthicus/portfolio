import { projects } from '@/app/(home)/_home/projects/projectsData'

import { Header } from '../Header'
import { Grid } from './Grid'

export const metadata = {
  title: 'All Projects (grid view) - Bartosz Podgruszecki',
  description: 'A list of all the projects I have worked on in a grid view.'
}

export default function AllProjects() {
  return (
    <div className="space-y-16 lg:py-24">
      <Header view="grid" />
      <Grid projects={projects} />
    </div>
  )
}
