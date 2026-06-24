'use client'

import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

const TILT_MAX_X = 2.5
const TILT_MAX_Y = 3

export function HeroDepthField() {
  const reduced = useReducedMotion()
  const sceneRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (reduced) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover)').matches) return

    const scene = sceneRef.current
    const light = lightRef.current
    if (!scene || !light) return

    const hero = document.getElementById('hero')
    if (!hero) return

    const EASE_MOVE = 'transform 0.15s ease-out'
    const EASE_LEAVE = 'transform 0.9s cubic-bezier(0.22,1,0.36,1)'

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2

        const tiltX = -ny * TILT_MAX_X
        const tiltY = nx * TILT_MAX_Y
        scene.style.transition = EASE_MOVE
        scene.style.transform =
          `perspective(1400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`

        const sceneRect = scene.getBoundingClientRect()
        const lx = e.clientX - sceneRect.left
        const ly = e.clientY - sceneRect.top
        light.style.opacity = '1'
        light.style.background =
          `radial-gradient(ellipse 320px 320px at ${lx}px ${ly}px, var(--pool-bg-inner) 0%, var(--pool-bg-mid) 50%, transparent 72%)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current)
      scene.style.transition = EASE_LEAVE
      scene.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg)'
      light.style.opacity = '0'
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg)',
        willChange: reduced ? 'auto' : 'transform',
      }}
    >
      <div
        ref={lightRef}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
