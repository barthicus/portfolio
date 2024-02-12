import { ReactNode } from "react"
import clsx from "clsx"

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      className={clsx(
        "relative flex items-center gap-5 font-sans text-4xl font-bold after:left-80",
        "after:h-[3px] after:min-w-[100px] after:max-w-[150px] after:grow after:bg-gradient-to-r after:from-[#fa5252] after:to-[#dd2476]",
      )}
    >
      <span>{children}</span>
    </h1>
  )
}
