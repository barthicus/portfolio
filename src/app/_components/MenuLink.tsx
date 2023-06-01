"use client"

import { ReactNode } from "react"
import { RouteType } from "next/dist/lib/load-custom-routes"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export const MenuLink = ({
  href,
  children,
}: {
  href: LinkProps<RouteType>["href"]
  children: ReactNode
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        "mx-2.5 flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#F3F6F6] font-medium text-gray-500 transition-all duration-300 ease-in-out",
        "dark:bg-[#212425] dark:text-gray-300",
        "hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:lg:bg-gradient-to-r hover:lg:text-white",
        {
          "bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:bg-gradient-to-r lg:text-white dark:lg:text-white":
            isActive,
        },
      )}
    >
      {children}
    </Link>
  )
}
