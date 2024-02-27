import Link from 'next/link'

import { projects } from '@/app/(home)/_home/projects/projectsData'

export default function AllProjects() {
  return (
    <div className="lg:py-24">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
        <Link className="group inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 size-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Back to home
        </Link>
      </div>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
            {/* <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th> */}
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.title} className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm" style={{ minWidth: '80px' }}>
                <div className="translate-y-px">{project.year}</div>
              </td>
              <th className="py-4 pr-8 align-top text-sm font-semibold text-slate-200">{project.title}</th>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {project.tags.map(tag => (
                    <li className="my-1 mr-1.5" key={tag}>
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 pr-4 align-top font-semibold leading-snug text-slate-200 sm:table-cell">
                {project.link ? (
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} (opens in a new tab)`}
                  >
                    <span>
                      {project.link}{' '}
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                ) : (
                  <div>{project.link}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
