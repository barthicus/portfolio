import { About } from './_home/About'
import { Experience } from './_home/Experience'
import { Projects } from './_home/Projects'

export const metadata = {
  title: 'Bartosz Podgruszecki FrontEnd Developer',
  description:
    "I'm Bartosz Podgruszecki, a FrontEnd Developer from Krotoszyn, Poland. I enjoy turning complex problems into performant and beautiful applications."
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
