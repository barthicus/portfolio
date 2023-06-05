import { PageTitle } from "../_components/PageTitle"

export default function AboutMe() {
  return (
    <div className="px-2 pt-12 sm:px-5 md:px-10 md:py-12 lg:px-14">
      <PageTitle>About Me</PageTitle>
      <div className="grid-cols-12 items-center pt-4 md:gap-10 md:pt-[30px] lg:grid ">
        <div className="col-span-12 space-y-2.5">
          <div className="lg:mr-16">
            <p className="leading-7 text-gray-500 dark:text-gray-100">About me page.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
