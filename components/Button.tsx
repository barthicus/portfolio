import { cn } from '@/lib/utils'

type Props = {
  className?: string
  isGhost?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ isGhost, ...props }: Props) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2',
        {
          'bg-transparent text-zinc-500 dark:text-zinc-400': isGhost
        },
        props.className
      )}
      {...props}
    />
  )
}
