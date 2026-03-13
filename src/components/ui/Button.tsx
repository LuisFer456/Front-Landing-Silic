import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface SharedProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type Props = ButtonProps | AnchorProps

const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap border border-white/15 text-xs uppercase tracking-[0.24em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50'

const variantStyles: Record<Variant, string> = {
  primary: 'bg-white text-black hover:bg-zinc-200',
  secondary: 'bg-transparent text-white hover:bg-white/10',
  ghost: 'border-transparent text-white hover:border-white/15 hover:bg-white/5',
}

const sizeStyles: Record<Size, string> = {
  md: 'min-h-11 px-6',
  lg: 'min-h-12 px-8',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: Props) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if (props.as === 'a') {
    const anchorProps = { ...props }
    delete (anchorProps as { as?: 'a' }).as

    return (
      <a className={classes} {...(anchorProps as AnchorProps)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
