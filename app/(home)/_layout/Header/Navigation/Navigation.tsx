'use client'

import { NavLink } from './NavLink'
import { useActiveSection } from './useActiveSection'
import { useHashScroll } from './useHashScroll'

export const Navigation = () => {
  useHashScroll()
  const activeSection = useActiveSection()

  return (
    <nav aria-label="In-page jump links">
      <ul className="mt-16 flex w-max gap-5">
        <li className="after:pl-4 after:align-middle after:text-xl after:font-thin after:text-slate-700 after:content-['/']">
          <NavLink href="#about" isActiveFromScroll={activeSection === 'about'}>
            About
          </NavLink>
        </li>
        <li className="after:pl-4 after:align-middle after:text-xl after:font-thin after:text-slate-700 after:content-['/']">
          <NavLink href="#experience" isActiveFromScroll={activeSection === 'experience'}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink href="#projects" isActiveFromScroll={activeSection === 'projects'}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
