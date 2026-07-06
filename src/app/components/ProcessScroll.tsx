'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import { StackMark, getSlabGeometry } from './StackMark'
import { useTheme } from './useTheme'

const PHASES = [
  {
    title: 'Understand',
    blurb:
      'We learn your business before touching a screen. Who your customers are, how they find you, what works and what doesn\u2019t. The right questions now save months later.',
  },
  {
    title: 'Plan',
    blurb:
      'Structure, user flows, and technology decisions locked in before any code is written. You see the blueprint and sign off on it. No surprises mid-build.',
  },
  {
    title: 'Build',
    blurb:
      'Design and development move together. You see real progress weekly, not a big reveal at the end. Every component is built to production standards from day one.',
  },
  {
    title: 'Grow',
    blurb:
      'Launch is just the starting line. We track what\u2019s working, refine what isn\u2019t, and add capability when the timing is right. Your site or app evolves with your business.',
  },
]

const INTERVAL = 10000
const MARK_SIZE = 80
const TRANSITION_DURATION = 1200

// StackMark brand colors (light scheme — on tertiary/mist bg)
const COLORS = { top: '#3B0F8C', mid: '#5B21B6', base: '#C4B8DC' }

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

// ─── PHASE ANIMATIONS (unchanged) ────────────────────────────────────────────

function UnderstandVisual({ elapsed, reduced }: { elapsed: number; reduced: boolean }) {
  // Hold scattered for 1s before starting to form the column
  const formElapsed = Math.max(0, elapsed - 1000)
  const formT = reduced ? 1 : Math.min(1, formElapsed / 5000)
  const ease = easeInOut(formT)
  const idleMs = elapsed

  const size = 46
  const gap = 8
  const homeX = 100
  const homeYs = [100 - (size + gap), 100, 100 + (size + gap)]

  const squares = [
    { color: COLORS.top, scatterX: 50, scatterY: 40, scatterRot: 28, driftFreq: 800, driftAmp: 5 },
    { color: COLORS.mid, scatterX: 145, scatterY: 65, scatterRot: -22, driftFreq: 650, driftAmp: 6 },
    { color: COLORS.base, scatterX: 75, scatterY: 150, scatterRot: -35, driftFreq: 1000, driftAmp: 7 },
  ]

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      {squares.map((sq, i) => {
        const drift = reduced ? 0 : Math.sin(idleMs / sq.driftFreq + i) * sq.driftAmp * (1 - ease)
        const driftY = reduced ? 0 : Math.cos(idleMs / (sq.driftFreq * 0.8) + i * 2) * sq.driftAmp * 0.7 * (1 - ease)
        const x = sq.scatterX + (homeX - sq.scatterX) * ease + drift
        const y = sq.scatterY + (homeYs[i] - sq.scatterY) * ease + driftY
        const rot = sq.scatterRot * (1 - ease) + (reduced ? 0 : Math.sin(idleMs / 1500 + i) * 3 * (1 - ease))
        return (
          <rect
            key={i}
            x={x - size / 2}
            y={y - size / 2}
            width={size}
            height={size}
            rx="7"
            fill={sq.color}
            opacity={0.65 + ease * 0.35}
            transform={`rotate(${rot} ${x} ${y})`}
          />
        )
      })}
    </svg>
  )
}

function PlanVisual({ elapsed, reduced }: { elapsed: number; reduced: boolean }) {
  const cellSize = 28
  const gap = 5
  const gridSize = cellSize * 4 + gap * 3
  const offsetX = (200 - gridSize) / 2
  const offsetY = (200 - gridSize) / 2

  const rowColors = [COLORS.top, COLORS.mid, COLORS.base]

  // Column highlight cycles: 0 (always lit), then 1, 2, 3 light up sequentially
  // Each column stays lit for 1.5s before the next lights up, then loops
  const cycleMs = reduced ? 10000 : elapsed
  const highlightCol = reduced ? 3 : Math.min(3, Math.floor(cycleMs / 800))

  const cells: { row: number; col: number; filled: boolean; color: string }[] = []
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const filled = row < 3
      const color = filled ? rowColors[row] : 'none'
      cells.push({ row, col, filled, color })
    }
  }

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      {cells.map(({ row, col, filled, color }, i) => {
        const x = offsetX + col * (cellSize + gap)
        const y = offsetY + row * (cellSize + gap)
        // Column is "lit" if it's been reached by the highlight sweep
        const isLit = col <= highlightCol
        const isActive = col === highlightCol && filled

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            rx="5"
            fill={filled && isLit ? color : 'none'}
            fillOpacity={filled ? (isActive ? 1 : isLit ? 0.7 : 0) : 0}
            stroke={!filled || !isLit ? 'var(--accent-alt)' : color}
            strokeWidth={filled && isLit ? 0 : 1.5}
            strokeOpacity={filled && isLit ? 0 : isLit ? 0.3 : 0.15}
            transform={isActive ? `translate(0, -1.5)` : undefined}
          />
        )
      })}
    </svg>
  )
}

function getBuildLayerStyles(
  elapsed: number,
  reduced: boolean
): [React.CSSProperties, React.CSSProperties, React.CSSProperties] {
  const { z1, z2, z3 } = getSlabGeometry(MARK_SIZE)
  const layerDelay = [1800, 900, 0]
  const targets = [z1, z2, z3]
  return targets.map((z, i) => {
    const localT = reduced ? 1 : Math.min(1, Math.max(0, (elapsed - layerDelay[i]) / 900))
    const spring = localT < 1
      ? localT * (1 + Math.sin(localT * Math.PI) * 0.45)
      : 1
    const slideY = 50 * (1 - spring)
    return {
      transform: `translateZ(${z}px) translateY(${slideY}px)`,
      opacity: Math.min(1, localT * 3),
    }
  }) as [React.CSSProperties, React.CSSProperties, React.CSSProperties]
}

function getGrowLayerStyles(
  elapsed: number,
  reduced: boolean
): [React.CSSProperties, React.CSSProperties, React.CSSProperties] {
  const { z1, z2, z3 } = getSlabGeometry(MARK_SIZE)
  const introT = reduced ? 1 : Math.min(1, elapsed / 1200)
  const ease = easeInOut(introT)
  const spread = 30
  return [
    {
      transform: `translateZ(${z1 + spread * ease}px)`,
      opacity: 1,
    },
    {
      transform: `translateZ(${z2}px)`,
      opacity: 1,
    },
    {
      transform: `translateZ(${z3 - spread * ease}px)`,
      opacity: 1,
    },
  ]
}

// ─── TRANSITION ANIMATIONS ───────────────────────────────────────────────────
// These bridge the visual gap between phases using the same 3 squares.

/**
 * Understand → Plan: Column slides to the left, grid outlines build out from it.
 */
function TransitionUnderstandToPlan({ elapsed, reduced }: { elapsed: number; reduced: boolean }) {
  const t = reduced ? 1 : Math.min(1, elapsed / TRANSITION_DURATION)
  const ease = easeInOut(t)

  const size = 46
  const gap = 8
  // Start: centered column (Understand end state)
  const startX = 100
  const startYs = [100 - (size + gap), 100, 100 + (size + gap)]
  // End: left side, scaled down to calendar cell size
  const cellSize = 28
  const gridGap = 5
  const gridSize = cellSize * 4 + gridGap * 3
  const gridOffsetX = (200 - gridSize) / 2
  const gridOffsetY = (200 - gridSize) / 2
  const endX = gridOffsetX + cellSize / 2
  const endYs = [
    gridOffsetY + cellSize / 2,
    gridOffsetY + cellSize + gridGap + cellSize / 2,
    gridOffsetY + (cellSize + gridGap) * 2 + cellSize / 2,
  ]
  const endSize = cellSize

  const colors = [COLORS.top, COLORS.mid, COLORS.base]
  const currentSize = size + (endSize - size) * ease

  // Grid outlines appear in second half of transition
  const gridT = Math.max(0, (t - 0.5) / 0.5)

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      {/* Grid outlines fading in */}
      {gridT > 0 && Array.from({ length: 16 }).map((_, i) => {
        const row = Math.floor(i / 4)
        const col = i % 4
        if (col === 0 && row < 3) return null // skip where our squares are
        const x = gridOffsetX + col * (cellSize + gridGap)
        const y = gridOffsetY + row * (cellSize + gridGap)
        return (
          <rect
            key={`g-${i}`}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            rx="5"
            fill="none"
            stroke="var(--accent-alt)"
            strokeWidth="1.5"
            strokeOpacity={0.25 * gridT}
            opacity={gridT}
          />
        )
      })}
      {/* 3 squares sliding from column to grid first-column */}
      {colors.map((color, i) => {
        const x = startX + (endX - startX) * ease
        const y = startYs[i] + (endYs[i] - startYs[i]) * ease
        return (
          <rect
            key={i}
            x={x - currentSize / 2}
            y={y - currentSize / 2}
            width={currentSize}
            height={currentSize}
            rx={7 + (5 - 7) * ease}
            fill={color}
            opacity={1}
          />
        )
      })}
    </svg>
  )
}

/**
 * Plan → Build: Grid disappears, squares move to center and shrink away,
 * then Build's stack-in animation takes over.
 */
function TransitionPlanToBuild({ elapsed, reduced }: { elapsed: number; reduced: boolean }) {
  const t = reduced ? 1 : Math.min(1, elapsed / TRANSITION_DURATION)
  const ease = easeInOut(t)

  const cellSize = 28
  const gridGap = 5
  const gridSize = cellSize * 4 + gridGap * 3
  const gridOffsetX = (200 - gridSize) / 2
  const gridOffsetY = (200 - gridSize) / 2

  // Grid outlines fade out in first half
  const gridFade = Math.max(0, 1 - t * 2)

  // Squares: from grid first-column positions → center column, fade out
  const startX = gridOffsetX + cellSize / 2
  const startYs = [
    gridOffsetY + cellSize / 2,
    gridOffsetY + cellSize + gridGap + cellSize / 2,
    gridOffsetY + (cellSize + gridGap) * 2 + cellSize / 2,
  ]
  const endX = 100
  const endY = 100
  const colors = [COLORS.top, COLORS.mid, COLORS.base]

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      {/* Grid outlines fading out */}
      {gridFade > 0 && Array.from({ length: 16 }).map((_, i) => {
        const row = Math.floor(i / 4)
        const col = i % 4
        if (col === 0 && row < 3) return null
        const x = gridOffsetX + col * (cellSize + gridGap)
        const y = gridOffsetY + row * (cellSize + gridGap)
        return (
          <rect
            key={`g-${i}`}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            rx="5"
            fill="none"
            stroke="var(--accent-alt)"
            strokeWidth="1.5"
            strokeOpacity={0.25 * gridFade}
            opacity={gridFade}
          />
        )
      })}
      {/* Squares converge to center and fade out */}
      {colors.map((color, i) => {
        const x = startX + (endX - startX) * ease
        const y = startYs[i] + (endY - startYs[i]) * ease
        const scale = 1 - ease * 0.6
        const size = cellSize * scale
        return (
          <rect
            key={i}
            x={x - size / 2}
            y={y - size / 2}
            width={size}
            height={size}
            rx="5"
            fill={color}
            opacity={1 - ease}
          />
        )
      })}
    </svg>
  )
}


/**
 * Grow → Understand: StackMark fades out, scattered squares fade in.
 */
function TransitionGrowToUnderstand({ elapsed, reduced, scheme }: { elapsed: number; reduced: boolean; scheme: 'dark' | 'light' }) {
  const t = reduced ? 1 : Math.min(1, elapsed / TRANSITION_DURATION)
  const fadeOut = 1 - easeInOut(Math.min(1, t / 0.5))
  const fadeIn = easeInOut(Math.max(0, (t - 0.4) / 0.6))

  return (
    <div className="relative w-full h-full">
      {/* Grow fading out */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: fadeOut }}>
        <div style={{ marginTop: -Math.round(MARK_SIZE * 0.45) / 2 }}>
          <StackMark
            size={MARK_SIZE}
            variant="static"
            scheme={scheme}
            layerStyles={getGrowLayerStyles(10000, true)}
            containerTransform="rotateX(52deg) rotateZ(45deg)"
          />
        </div>
      </div>
      {/* Understand fading in */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: fadeIn }}>
        <UnderstandVisual elapsed={0} reduced={reduced} />
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function ProcessScroll() {
  const [active, setActive] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [mode, setMode] = useState<'phase' | 'transition'>('phase')
  const [transFrom, setTransFrom] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef(Date.now())
  const reducedMotion = useReducedMotion()
  const { theme } = useTheme()
  const markScheme = theme === 'light' ? 'light' : 'dark'

  const startTransition = useCallback((from: number, to: number) => {
    setTransFrom(from)
    setActive(to)
    // Build→Grow: skip transition, go straight to phase
    if (from === 2 && to === 3) {
      setMode('phase')
    } else {
      setMode('transition')
    }
    setElapsed(0)
    startRef.current = Date.now()
  }, [])

  const advance = useCallback(() => {
    const next = (active + 1) % PHASES.length
    startTransition(active, next)
  }, [active, startTransition])

  useEffect(() => {
    if (reducedMotion) return

    startRef.current = Date.now()

    timerRef.current = setInterval(() => {
      const ms = Date.now() - startRef.current
      setElapsed(ms)

      if (mode === 'transition' && ms >= TRANSITION_DURATION) {
        // Transition done — start the new phase
        setMode('phase')
        setElapsed(0)
        startRef.current = Date.now()
      } else if (mode === 'phase' && ms >= INTERVAL) {
        advance()
      }
    }, 30)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [active, mode, advance, reducedMotion])


  const goTo = (idx: number) => {
    if (idx === active && mode === 'phase') return
    startTransition(active, idx)
  }

  const currentElapsed = reducedMotion ? 10000 : elapsed
  const reduced = !!reducedMotion

  function renderVisual() {
    if (mode === 'transition' && !reduced) {
      return renderTransition()
    }
    return renderPhase(active, currentElapsed)
  }

  function renderPhase(phase: number, phaseElapsed: number) {
    switch (phase) {
      case 0:
        return <UnderstandVisual elapsed={phaseElapsed} reduced={reduced} />
      case 1:
        return <PlanVisual elapsed={phaseElapsed} reduced={reduced} />
      case 2:
        return (
          <div style={{ marginTop: -Math.round(MARK_SIZE * 0.45) / 2 }}>
            <StackMark
              size={MARK_SIZE}
              variant="static"
              scheme={markScheme}
              layerStyles={getBuildLayerStyles(phaseElapsed, reduced)}
              containerTransform="rotateX(52deg) rotateZ(45deg)"
            />
          </div>
        )
      case 3:
        return (
          <div style={{ marginTop: -Math.round(MARK_SIZE * 0.45) / 2 }}>
            <StackMark
              size={MARK_SIZE}
              variant="static"
              scheme={markScheme}
              layerStyles={getGrowLayerStyles(phaseElapsed, reduced)}
              containerTransform="rotateX(52deg) rotateZ(45deg)"
            />
          </div>
        )
      default:
        return null
    }
  }

  function renderTransition() {
    const transKey = `${transFrom}-${active}`
    switch (transKey) {
      case '0-1':
        return <TransitionUnderstandToPlan elapsed={currentElapsed} reduced={reduced} />
      case '1-2':
        return <TransitionPlanToBuild elapsed={currentElapsed} reduced={reduced} />
      case '2-3':
        // Skip transition — Grow's own fan-apart serves as the visual bridge
        return renderPhase(active, currentElapsed)
      case '3-0':
        return <TransitionGrowToUnderstand elapsed={currentElapsed} reduced={reduced} scheme={markScheme} />
      default:
        // Non-sequential jumps: simple crossfade via opacity
        return renderPhase(active, 0)
    }
  }

  // Progress bar only shows during phase, not transition
  const barProgress = mode === 'phase' ? (reducedMotion ? 1 : Math.min(1, elapsed / INTERVAL)) : 0

  return (
    <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16">
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
      {/* Left: label + tabs + blurb */}
      <div className="py-12 md:py-16">

        <h2
          className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
          style={{ color: 'var(--accent-alt)' }}
        >
          Process
        </h2>

        <div
          className="flex gap-5 sm:gap-6 md:gap-8 mb-6 md:mb-8"
          role="tablist"
          aria-label="Process phases"
          onKeyDown={(e) => {
            const len = PHASES.length
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              e.preventDefault()
              const next = (active + 1) % len
              goTo(next)
              document.getElementById(`cs-process-tab-${next}`)?.focus()
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
              e.preventDefault()
              const prev = (active - 1 + len) % len
              goTo(prev)
              document.getElementById(`cs-process-tab-${prev}`)?.focus()
            } else if (e.key === 'Home') {
              e.preventDefault()
              goTo(0)
              document.getElementById('cs-process-tab-0')?.focus()
            } else if (e.key === 'End') {
              e.preventDefault()
              goTo(len - 1)
              document.getElementById(`cs-process-tab-${len - 1}`)?.focus()
            }
          }}
        >
          {PHASES.map((phase, i) => (
            <button
              key={i}
              id={`cs-process-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`cs-process-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => goTo(i)}
              className="relative pb-2.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-alt) rounded-sm"
              style={{
                color: i === active ? 'var(--heading-alt)' : 'var(--label-alt)',
              }}
            >
              <span className="text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-[-0.02em]">
                {phase.title}
              </span>

              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: 'var(--divider-alt)' }}
                aria-hidden="true"
              />

              {i === active && (
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent-alt)',
                    width: `${barProgress * 100}%`,
                  }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-w-0 relative" style={{ minHeight: 80 }}>
          {PHASES.map((phase, i) => (
            <div
              key={i}
              id={`cs-process-panel-${i}`}
              className="transition-all duration-500"
              style={{
                position: i === active ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: i === active ? 1 : 0,
                transform: i === active
                  ? 'translateY(0)'
                  : i < active ? 'translateY(-6px)' : 'translateY(6px)',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
              role="tabpanel"
              aria-labelledby={`cs-process-tab-${i}`}
              aria-hidden={i !== active ? true : undefined}
              inert={i !== active ? true : undefined}
            >
              <p
                className="text-[15px] md:text-[16px] leading-[1.7] max-w-lg"
                style={{ color: 'var(--body-alt)' }}
              >
                {phase.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: phase visual */}
      <div className="hidden md:flex items-center justify-center" aria-hidden="true">
        <div className="w-48 h-48 flex items-center justify-center">
          {renderVisual()}
        </div>
      </div>
    </div>
    </div>
  )
}
