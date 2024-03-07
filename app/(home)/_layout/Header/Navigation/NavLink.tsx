'use client'

import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

type Props = LinkProps & {
  isActiveFromScroll: boolean
  children: ReactNode
  className?: string
}

export const NavLink = ({ href, isActiveFromScroll, className, children, ...props }: Props) => {
  const isActive = isActiveFromScroll

  return (
    <Link
      {...props}
      className={cn(
        'text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-500',
        {
          'text-teal-300': isActive
        },
        className
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
