"use client"

import clsx from "clsx"
import { useTheme } from "next-themes"

const sunIcon = (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dark:hidden"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const moonIcon = (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="hidden group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

export const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={clsx(
        "top-[-40px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-700 text-xl text-white transition-all duration-300 ease-in-out hover:bg-teal-500",
        "dark:bg-white dark:text-black dark:hover:bg-teal-500 dark:hover:text-white",
        "lg:absolute lg:right-5 lg:rounded-none lg:rounded-t-full",
      )}
    >
      {sunIcon}
      {moonIcon}
    </button>
  )
}
