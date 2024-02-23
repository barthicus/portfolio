'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { useHash } from './useHash'

export const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const hash = useHash()

  const isActive = (hash === '' && href === '#about') || hash === href.substring(1)

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
