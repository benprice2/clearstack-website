'use client'

import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

// Mini StackMark echo — 3 offset squares, brand callback
function MiniMark() {
  return (
    <div style={{ position: 'relative', width: 14, height: 14, flexShrink: 0 }}>
      {([
        { x: 0,  y: 0,  bg: '#3B0F8C' },
        { x: -2, y: -2, bg: '#5B21B6' },
        { x: -4, y: -4, bg: '#7C3AED' },
      ] as const).map(({ x, y, bg }, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: -y, left: -x,
          width: 12, height: 12, borderRadius: 2,
          backgroundColor: bg,
        }} />
      ))}
    </div>
  )
}

// Placeholder text bar
function Bar({ w, h = 5, faint = false }: { w: number | string; h?: number; faint?: boolean }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 3,
      backgroundColor: faint ? 'var(--mock-bar-faint)' : 'var(--mock-bar)',
      flexShrink: 0,
    }} />
  )
}

// Placeholder button
function MockBtn({ filled = false, w = 52 }: { filled?: boolean; w?: number }) {
  return (
    <div style={{
      width: w, height: 20, borderRadius: 4, flexShrink: 0,
      backgroundColor: filled ? 'var(--mock-btn-fill)' : 'transparent',
      border: filled ? '1px solid var(--mock-btn-border)' : '1px solid var(--mock-btn-ghost)',
    }} />
  )
}

export function HeroDashboard() {
  const reduced  = useReducedMotion()
  const wrapRef  = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const wrap  = wrapRef.current
    const light = lightRef.current
    if (!wrap || !light) return

    // Listen on the entire hero section, not just the dashboard
    const hero = document.getElementById('hero')
    if (!hero) return

    const BASE_RX = 2
    const BASE_RY = 0
    const EASE_MOVE  = 'transform 0.12s ease-out'
    const EASE_LEAVE = 'transform 0.8s cubic-bezier(0.22,1,0.36,1)'

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        // Rotation: normalise against hero section bounds
        const heroRect = hero.getBoundingClientRect()
        const nx = ((e.clientX - heroRect.left) / heroRect.width  - 0.5) * 2
        const ny = ((e.clientY - heroRect.top)  / heroRect.height - 0.5) * 2

        const rx = BASE_RX - ny * 5
        const ry = BASE_RY + nx * 6

        wrap.style.transition = EASE_MOVE
        wrap.style.transform  =
          `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`

        // Light pool: position relative to the dashboard element
        const wrapRect = wrap.getBoundingClientRect()
        const lx = e.clientX - wrapRect.left
        const ly = e.clientY - wrapRect.top

        light.style.opacity = '1'
        light.style.backgroundImage =
          `radial-gradient(circle at ${lx}px ${ly}px, var(--pool-inner) 0%, var(--pool-mid) 45%, transparent 68%)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current)
      wrap.style.transition = EASE_LEAVE
      wrap.style.transform  =
        `perspective(1200px) rotateX(${BASE_RX}deg) rotateY(${BASE_RY}deg)`
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
      ref={wrapRef}
      aria-hidden="true"
      style={{
        width: '100%',
        maxWidth: 560,
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--dash-border)',
        boxShadow: [
          'var(--dash-shadow)',
          '0 0 0 1px var(--dash-outline)',
          'inset 0 1px 0 var(--dash-highlight)',
        ].join(', '),
        transform: reduced
          ? 'none'
          : 'perspective(1200px) rotateX(2deg) rotateY(0deg)',
        transformOrigin: '50% 50%',
        transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        position: 'relative',
        willChange: 'transform',
      }}
    >

      {/* Cursor light pool */}
      <div
        ref={lightRef}
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          opacity: 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      />

      {/* Browser chrome */}
      <div style={{
        backgroundColor: 'var(--hero-chrome-bg)',
        borderBottom: '1px solid var(--mock-border)',
        padding: '9px 14px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {(['var(--hero-chrome-dot-1)','var(--hero-chrome-dot-2)','var(--hero-chrome-dot-3)'] as const).map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 20, borderRadius: 4, maxWidth: 200,
          backgroundColor: 'var(--hero-chrome-bar)',
          display: 'flex', alignItems: 'center', paddingLeft: 8, gap: 6,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--mock-dot)' }} />
          <Bar w={80} />
        </div>
      </div>

      {/* Website interior */}
      <div style={{ backgroundColor: 'var(--mock-bg)' }}>

        {/* Site nav */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 18px',
          borderBottom: '1px solid var(--mock-border)',
          backgroundColor: 'var(--mock-nav)',
        }}>
          <MiniMark />
          <Bar w={44} h={6} />
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Bar w={28} h={4} faint />
            <Bar w={28} h={4} faint />
            <Bar w={28} h={4} faint />
          </div>
          <MockBtn filled w={46} />
        </div>

        {/* Site hero */}
        <div style={{
          padding: '28px 22px 24px',
          borderBottom: '1px solid var(--mock-border)',
        }}>
          {/* Eyebrow label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12,
          }}>
            <div style={{
              width: 4, height: 4, borderRadius: '50%',
              backgroundColor: 'var(--mock-glow)',
              boxShadow: '0 0 5px var(--mock-glow-shadow)',
            }} />
            <Bar w={60} h={4} />
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
            <Bar w="88%" h={14} />
            <Bar w="68%" h={14} />
          </div>

          {/* Subhead */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 18 }}>
            <Bar w="76%" h={5} faint />
            <Bar w="58%" h={5} faint />
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: 8 }}>
            <MockBtn filled w={70} />
            <MockBtn w={58} />
          </div>
        </div>

        {/* Feature cards row */}
        <div style={{
          display: 'flex', gap: 8, padding: '16px 18px 20px',
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              flex: 1,
              backgroundColor: 'var(--mock-card)',
              borderRadius: 6,
              border: '1px solid var(--mock-card-border)',
              padding: '10px 10px 12px',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 4,
                background: i === 0
                  ? 'var(--mock-gradient)'
                  : 'var(--mock-icon-bg)',
                marginBottom: 2,
              }} />
              <Bar w="80%" h={5} />
              <Bar w="90%" h={4} faint />
              <Bar w="60%" h={4} faint />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
