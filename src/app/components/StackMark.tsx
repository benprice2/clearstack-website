'use client'

import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type StackMarkVariant = 'static' | 'build' | 'breathe' | 'peek'
type StackMarkScheme = 'dark' | 'light'

interface StackMarkProps {
  size?: number
  variant?: StackMarkVariant
  scheme?: StackMarkScheme
  /** Override per-layer styles [top, mid, base]. When provided, variant animation is skipped. */
  layerStyles?: [React.CSSProperties, React.CSSProperties, React.CSSProperties]
  /** Override the parent 3D container transform (default: 'rotateX(52deg) rotateZ(45deg)') */
  containerTransform?: string
}

/** Compute the standard slab geometry for a given mark size */
export function getSlabGeometry(size: number) {
  const slabH = Math.round(size * 0.13)
  const gap = Math.round(size * 0.13)
  return {
    slabH,
    gap,
    radius: Math.round(size * 0.22),
    z1: (slabH + gap) * 2,
    z2: slabH + gap,
    z3: 0,
  }
}

// Colors sourced exactly from brand guide
const COLORS = {
  // On dark backgrounds (void, violet surfaces)
  dark: { top: '#7C3AED', mid: '#4C1D95', base: '#2C0A58' },
  // On light backgrounds (offwhite, mist surfaces)
  light: { top: '#3B0F8C', mid: '#5B21B6', base: '#C4B8DC' },
  // Stack Build animation uses its own palette (from brand guide motion section)
  build: { top: '#7C3AED', mid: '#3B0F8C', base: '#160A38' },
}

// Layers fan apart by these extra px values on Peek hover
const PEEK_EXTRAS = [18, 8, 0] // [top, mid, base]

// Build animation: base layer in first (delay 0s), mid next, top last
const BUILD_DELAYS = ['0.5s', '0.15s', '0s'] // [top, mid, base]

// Breathe animation: top layer moves first, then mid, then base (staggered)
const BREATHE_DELAYS = ['0s', '0.25s', '0.5s'] // [top, mid, base]

export function StackMark({
  size = 56,
  variant = 'static',
  scheme = 'dark',
  layerStyles,
  containerTransform,
}: StackMarkProps) {
  const [hovered, setHovered] = useState(false)
  const reduced = useReducedMotion()

  // Mark geometry — matches brand guide math exactly
  const { slabH, gap, radius, z1, z2, z3 } = getSlabGeometry(size)

  const colors = variant === 'build' ? COLORS.build : COLORS[scheme]

  // Slabs ordered [top, mid, base] — highest Z first
  const slabs = [
    { z: z1, color: colors.top },
    { z: z2, color: colors.mid },
    { z: z3, color: colors.base },
  ]

  const getSlabStyle = (index: number, z: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      background: slabs[index].color,
    }

    switch (variant) {
      case 'build':
        return {
          ...base,
          // --z is consumed by cs-slab-in keyframe in globals.css
          ['--z' as string]: `${z}px`,
          animation: `cs-slab-in 0.5s cubic-bezier(0.34,1.56,0.64,1) ${BUILD_DELAYS[index]} both`,
        }

      case 'breathe':
        return {
          ...base,
          // --z consumed by cs-breathe keyframe
          ['--z' as string]: `${z}px`,
          animation: `cs-breathe 3.2s ease-in-out ${BREATHE_DELAYS[index]} infinite`,
        }

      case 'peek':
        return {
          ...base,
          transform: `translateZ(${hovered && !reduced ? z + PEEK_EXTRAS[index] : z}px)`,
          transition: reduced
            ? 'none'
            : hovered
              ? 'transform 0.32s cubic-bezier(0.34,1.56,0.64,1)'
              : 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
        }

      default: // 'static'
        return { ...base, transform: `translateZ(${z}px)` }
    }
  }

  return (
    <div
      style={{
        flexShrink: 0,
        width: size * 1.4,
        height: size * 0.9,
        overflow: 'visible',
        cursor: variant === 'peek' ? 'pointer' : 'default',
      }}
      onMouseEnter={variant === 'peek' ? () => setHovered(true) : undefined}
      onMouseLeave={variant === 'peek' ? () => setHovered(false) : undefined}
    >
      <div
        style={{
          perspective: 600,
          width: size * 1.4,
          height: size * 0.9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: size,
            height: size,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: containerTransform ?? 'rotateX(52deg) rotateZ(45deg)',
            transition: containerTransform !== undefined ? 'transform 0.8s cubic-bezier(0.4,0,0.2,1)' : undefined,
            marginTop: Math.round(size * 0.45),
          }}
        >
          {slabs.map((slab, i) => (
            <div key={i} style={layerStyles ? { ...getSlabStyle(i, slab.z), ...layerStyles[i] } : getSlabStyle(i, slab.z)} />
          ))}
        </div>
      </div>
    </div>
  )
}
