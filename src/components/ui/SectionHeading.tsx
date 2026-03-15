import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">{label}</p>
      <h2 className="font-serif text-[1.9rem] leading-tight text-zinc-50 sm:text-[2.4rem] md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-6 text-zinc-300">{description}</p> : null}
    </div>
  )
}
