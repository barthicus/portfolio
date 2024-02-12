'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { MenuLink } from './MenuLink'
import { MobileMenuTrigger } from './MobileMenuTrigger'
import { ThemeToggler } from './ThemeToggler'

const homeSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
  </svg>
)

export const aboutMeSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
    </g>
  </svg>
)

export const portfolioSvg = (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
)

const blogSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" height="1em" width="1em">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.991 4.8C20.991 3.81 20.19 3 19.2 3H4.8C3.81 3 3 3.81 3 4.8V15.6C3 16.59 3.81 17.4 4.8 17.4H17.4L21 21L20.991 4.8ZM19.2 4.8V16.653L18.147 15.6H4.8V4.8H19.2ZM17.4 12H6.6V13.8H17.4V12ZM6.6 9.3H17.4V11.1H6.6V9.3ZM17.4 6.6H6.6V8.4H17.4V6.6Z"
      fill="currentColor"
    />
  </svg>
)

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="ml-auto flex flex-col items-end justify-end lg:relative lg:mb-10">
      <div className="flex items-center justify-between gap-4 self-stretch">
        {pathname !== '/' && (
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-800 hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-500 md:hidden"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        )}
        <div className="flex grow items-center justify-end gap-4">
          <ThemeToggler />
          <MobileMenuTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <nav
        className={cn('self-stretch p-[30px] lg:block lg:h-[144px] lg:rounded-[16px] lg:bg-white lg:dark:bg-zinc-900', {
          hidden: !isOpen
        })}
      >
        <ul className="flex flex-col lg:flex-row">
          <li>
            <MenuLink href="/" onClick={() => setIsOpen(false)}>
              <span className="mb-1 hidden text-lg lg:block">{homeSvg}</span>
              Home
            </MenuLink>
          </li>
          <li>
            <MenuLink href="/about-me" onClick={() => setIsOpen(false)}>
              <span className="mb-1 hidden text-lg lg:block">{aboutMeSvg}</span>
              About Me
            </MenuLink>
          </li>
          <li>
            <MenuLink href="/portfolio" onClick={() => setIsOpen(false)}>
              <span className="mb-1 hidden text-lg lg:block">{portfolioSvg}</span>
              Portfolio
            </MenuLink>
          </li>
          <li>
            <MenuLink href="/blog" onClick={() => setIsOpen(false)}>
              <span className="mb-1 hidden text-lg lg:block">{blogSvg}</span>
              Blog
            </MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
