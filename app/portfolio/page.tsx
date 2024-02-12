import { PageTitle } from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'
import { WipInfo } from '@/components/WipInfo'

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
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div>
              <p className="text-gray-500 dark:text-gray-100">My latest projects will be here.</p>
              <p className="text-gray-500 dark:text-gray-100">
                There will be a list of latest and old projects that I did in the past.
              </p>
            </div>
            <WipInfo />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
