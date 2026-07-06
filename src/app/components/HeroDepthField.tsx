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
  const posRef = useRef({ tx: 0, ty: 0, sx: 0, sy: 0, active: false })

  useEffect(() => {
    if (reduced) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover)').matches) return

    const scene = sceneRef.current
    const light = lightRef.current
    if (!scene || !light) return

    const hero = document.getElementById('hero')
    if (!hero) return

    const pos = posRef.current
    const EASE_MOVE = 'transform 0.15s ease-out'
    const EASE_LEAVE = 'transform 0.9s cubic-bezier(0.22,1,0.36,1)'

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2

      const tiltX = -ny * TILT_MAX_X
      const tiltY = nx * TILT_MAX_Y
      scene.style.transition = EASE_MOVE
      scene.style.transform =
        `perspective(1400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`

      pos.tx = e.clientX - scene.getBoundingClientRect().left
      pos.ty = e.clientY - scene.getBoundingClientRect().top
      if (!pos.active) {
        pos.sx = pos.tx
        pos.sy = pos.ty
      }
      pos.active = true
      light.style.opacity = '1'
    }

    const onLeave = () => {
      scene.style.transition = EASE_LEAVE
      scene.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg)'
      pos.active = false
      light.style.opacity = '0'
    }

    function frame() {
      if (pos.active && light) {
        pos.sx += (pos.tx - pos.sx) * 0.08
        pos.sy += (pos.ty - pos.sy) * 0.08
        light.style.background =
          `radial-gradient(ellipse 320px 320px at ${pos.sx}px ${pos.sy}px, var(--pool-bg-inner) 0%, var(--pool-bg-mid) 50%, transparent 72%)`
      }
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

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
