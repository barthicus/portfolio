'use client'

import { useEffect, useRef, useState } from 'react'

import { NavLink } from './NavLink'
import { useHash } from './useHash'

export const Navigation = () => {
  const hash = useHash()
  const [activeSection, setActiveSection] = useState('')

  // navigate to the correct section when the page loads
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  // update the active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')

    console.log({ sections })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px 0px 96px',
        root: null,
        threshold: 0.3
      }
    )

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

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
