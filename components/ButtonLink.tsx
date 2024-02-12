import { ReactNode } from 'react'
import { RouteType } from 'next/dist/lib/load-custom-routes'
import Link, { LinkProps } from 'next/link'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { aboutMeSvg, portfolioSvg } from './Header'

export const cvSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    stroke="currentColor"
    fill="currentColor"
  >
    <path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z" />
    <path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z" />
    <path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z" />
  </svg>
)

export const ButtonLink = ({
  href,
  children,
  className,
  icon
}: {
  href: LinkProps<RouteType>['href']
  children: ReactNode
  className?: string
  icon?: 'cv' | 'external' | 'portfolio' | 'about-me'
}) => {
  let iconSvg: ReactNode = null
  if (icon === 'cv') {
    iconSvg = <BsFillFileEarmarkPersonFill className="size-4" />
  } else if (icon === 'external') {
    iconSvg = <FaExternalLinkAlt className="size-4" />
  } else if (icon === 'portfolio') {
    iconSvg = portfolioSvg
  } else if (icon === 'about-me') {
    iconSvg = aboutMeSvg
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l',
        className
      )}
    >
      {iconSvg}
      <span className={cn({ 'ml-2': icon !== null })}>{children}</span>
    </Link>
  )
}
