'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { useHash } from './useHash'

type Props = {
  href: string
  isActiveFromScroll: boolean
  children: ReactNode
}

export const NavLink = ({ href, isActiveFromScroll, children }: Props) => {
  const hash = useHash()

  const isActive = isActiveFromScroll

  return (
    <Link
      className={cn('text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-500', {
        'text-teal-300': isActive
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
