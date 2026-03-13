import { cn } from '../../lib/utils'

interface WordmarkProps {
  className?: string
}

export function Wordmark({ className }: WordmarkProps) {
  return <span className={cn('font-serif text-2xl tracking-[0.2em] text-zinc-50', className)}>SILIC</span>
}
