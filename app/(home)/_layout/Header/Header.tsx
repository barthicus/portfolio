import Link from 'next/link'

import { Navigation } from './Navigation/Navigation'
import { Socials } from './Socials'

export const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-[100lvh] lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="space-y-3">
          <h2 className="text-lg font-medium tracking-tight text-teal-500 sm:text-xl">Freelance Software Engineer</h2>
          <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-[2.6rem]">
            <Link href="/">
              Bartosz Podgruszecki<span className="text-teal-400">.</span>
            </Link>
          </h1>
          <p className="max-w-sm leading-normal">
            I create performant and visually beautiful web applications with React and TypeScript.
          </p>
        </div>
        <Navigation />

        {/* Temp TODO list */}
        <div className="mt-8">
          <h3 className="text-lg font-medium tracking-tight text-teal-500 sm:text-xl">TODO</h3>
          <ul className="mt-5 text-slate-400">
            <li>☑️ finish exp list (fix titles, update subtitle, fix tags)</li>
            <li>☑️ finish featured projects list add projects page link</li>
            <li>☑️ add link to CV in pdf</li>
            <li>☑️ check styles on mobile</li>
            <li>- finish CV</li>
            <li>- finish all projects page</li>
          </ul>
        </div>
      </div>
      <Socials />
    </header>
  )
}
