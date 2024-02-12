import { PageTitle } from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'
import { WipInfo } from '@/components/WipInfo'

export const runtime = 'edge'

export const metadata = {
  title: 'Blog - Bartosz Podgruszecki',
  description: 'This is my blog.'
}

export default function Blog() {
  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>Blog</PageTitle>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div>
              <p className="text-gray-500 dark:text-gray-100">Hopefully some blog posts will be here soon (tm).</p>
            </div>
            <WipInfo />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}