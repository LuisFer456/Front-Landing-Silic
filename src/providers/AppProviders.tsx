import type { PropsWithChildren } from 'react'
import { MotionConfig } from 'framer-motion'

export function AppProviders({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
