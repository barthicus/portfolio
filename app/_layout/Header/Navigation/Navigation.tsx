'use client'

import { useEffect } from 'react'

import { NavLink } from './NavLink'
import { useHash } from './useHash'

export const Navigation = () => {
  const hash = useHash()

  // navigate to the correct section when the page loads
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 flex w-max gap-5">
        <li className="after:pl-4 after:align-middle after:text-xl after:font-thin after:text-slate-700 after:content-['/']">
          <NavLink href="#about">About</NavLink>
        </li>
        <li className="after:pl-4 after:align-middle after:text-xl after:font-thin after:text-slate-700 after:content-['/']">
          <NavLink href="#experience">Experience</NavLink>
        </li>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  )
}
