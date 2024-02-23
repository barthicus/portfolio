import { projects } from '@/data/projects'

export const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 space-y-4 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Projects<span className="text-teal-400">.</span>
      </h2>
      <ul className="space-y-4">
        {projects.map(({ title, description, link }) => (
          <li key={title}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline dark:text-cyan-400"
            >
              {title}
            </a>{' '}
            - {description}
          </li>
        ))}
      </ul>
    </section>
  )
}
