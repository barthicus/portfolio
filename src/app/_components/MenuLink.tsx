"use client"

import { ReactNode } from "react"
import { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export const MenuLink = ({
  href,
  children,
  onClick,
}: {
  href: Route
  children: ReactNode
  onClick: () => void
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "flex cursor-pointer flex-col items-center justify-center bg-[#F3F6F6] py-6 text-sm font-medium transition-all duration-300 ease-in-out lg:mx-2.5 lg:h-20 lg:w-20 lg:rounded-[10px] lg:py-0",
        "text-gray-800 lg:text-gray-500",
        "dark:bg-[#212425] dark:text-gray-300",
        "hover:bg-gradient-to-r hover:from-[#05dfc6] hover:to-[#29d9f7] hover:dark:text-gray-700 hover:lg:bg-gradient-to-r hover:lg:text-gray-800",
        {
          "bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] dark:text-gray-800 lg:bg-gradient-to-r lg:text-gray-800 dark:lg:text-gray-800":
            isActive,
        },
      )}
    >
      {children}
    </Link>
  )
}
