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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <h2 className="font-serif text-3xl leading-tight text-zinc-50 md:text-5xl">{title}</h2>
      {description ? <p className="max-w-xl text-sm text-zinc-300">{description}</p> : null}
    </div>
  )
}
