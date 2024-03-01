import { About } from './_home/About'
import { Experience } from './_home/experience/Experience'
import { Projects } from './_home/projects/Projects'

export const metadata = {
  title: 'Bartosz Podgruszecki FrontEnd Developer',
  description:
    "I'm Software Engineer from Poland, working mostly in web development. I enjoy turning complex problems into performant and beautiful applications. "
}

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
    </>
  )
}
