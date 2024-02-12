import clsx from 'clsx'

type Props = {
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2',
        props.className
      )}
      {...props}
    />
  )
}
