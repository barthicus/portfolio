"use client"

import { ButtonLink } from "@/components/ButtonLink"
import { PageTitle } from "@/components/PageTitle"
import { PageWrapper } from "@/components/PageWrapper"

export const runtime = "edge"

export default function Error() {
  return (
    <PageWrapper>
      <div className="px-6 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
        <PageTitle>Project not found</PageTitle>
        <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
          <div className="col-span-12 space-y-2.5">
            <div>
              <p className="text-zinc-500 dark:text-zinc-400">
                I&apos;m sorry but the project you are looking for does not exist.
              </p>
              <ButtonLink href="/portfolio" className="mt-4">
                Go back to portfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
