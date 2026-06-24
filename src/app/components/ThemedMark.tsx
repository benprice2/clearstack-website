'use client'

import { StackMark } from './StackMark'
import { useTheme } from './useTheme'

// StackMark that auto-selects scheme based on current theme.
// Use for marks placed on --bg-primary surfaces (which flip per theme).
export function ThemedMark({ size, variant }: {
  size?: number
  variant?: 'static' | 'build' | 'breathe' | 'peek'
}) {
  const { theme } = useTheme()
  return <StackMark size={size} variant={variant} scheme={theme === 'light' ? 'light' : 'dark'} />
}
