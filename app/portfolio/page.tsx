import { PageTitle } from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'

import Projects from './_projects/page'

export const runtime = 'edge'

export const metadata = {
  title: 'Portfolio - Bartosz Podgruszecki',
  description: 'My portfolio.'
}

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>Portfolio</PageTitle>
        <div className="pt-4">
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            List of my latest projects. Feel free to use filters to find something quickly.
          </p>

          <Projects />
        </div>
      </div>
    </PageWrapper>
  )
}
