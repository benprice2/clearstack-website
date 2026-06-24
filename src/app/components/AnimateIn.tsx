'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  /**
   * When true, the element only animates Y (translateY) — opacity stays at 1.
   * Use this for LCP candidates that must never be invisible.
   */
  yOnly?: boolean
}

export function AnimateIn({
  children,
  delay = 0,
  className,
  style,
  yOnly = false,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  const hidden = reduced
    ? {}
    : yOnly
      ? { y: 32 }
      : { y: 32, opacity: 0 }

  const visible = reduced
    ? {}
    : yOnly
      ? { y: 0 }
      : { y: 0, opacity: 1 }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{
        duration: 0.4,
        delay: reduced ? 0 : delay,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  )
}
