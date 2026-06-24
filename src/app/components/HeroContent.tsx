'use client'

import { motion, useReducedMotion } from 'framer-motion'

const DELAYS = {
  mobileMark: 0.1,
  label:      0.4,
  heading:    0.5,
  sub:        0.65,
  cta:        0.8,
}

function fadeUp(delay: number, reduced: boolean) {
  return {
    initial: reduced ? {} : { y: 24, opacity: 0 },
    animate: reduced ? {} : { y: 0,  opacity: 1 },
    transition: {
      duration: 0.45,
      delay: reduced ? 0 : delay,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  }
}

// For the h1 (LCP candidate): translateY only — never opacity:0
function slideUp(delay: number, reduced: boolean) {
  return {
    initial: reduced ? {} : { y: 24 },
    animate: reduced ? {} : { y: 0 },
    transition: {
      duration: 0.45,
      delay: reduced ? 0 : delay,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  }
}

export function HeroContent() {
  const reduced = useReducedMotion()

  return (
    <div className="flex-1 min-w-0">
      {/* Auckland label */}
      <motion.p
        className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
        style={{ color: 'var(--label)' }}
        {...fadeUp(DELAYS.label, !!reduced)}
      >
        Auckland · New Zealand
      </motion.p>

      {/* h1 — LCP element, translateY only */}
      <motion.h1
        className="font-heading font-bold leading-none tracking-[-0.04em] mb-6"
        style={{
          color: 'var(--heading)',
          fontSize: 'clamp(38px, 5.5vw, 76px)',
        }}
        {...slideUp(DELAYS.heading, !!reduced)}
      >
        <span style={{ color: 'var(--heading)' }}>Build it right,</span><br />
        <span style={{ color: 'var(--accent)' }}>then automate it.</span>
      </motion.h1>

      {/* Subhead */}
      <motion.p
        className="text-[16px] md:text-[17px] leading-[1.75] mb-10 max-w-md"
        style={{ color: 'var(--body)' }}
        {...fadeUp(DELAYS.sub, !!reduced)}
      >
        We build custom websites and SaaS applications for NZ
        businesses. Designed for how you actually work, not adapted
        from a template. And built so that when you&apos;re ready to
        automate, it&apos;s a step forward, not a rebuild.
      </motion.p>

      {/* CTA — variants propagate from anchor to arrow */}
      <motion.div className="text-center md:text-left" {...fadeUp(DELAYS.cta, !!reduced)}>
        <motion.a
          href="#contact"
          className="inline-block text-[13px] font-semibold px-6 py-3.5 rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
          style={{ backgroundColor: 'var(--cta-bg)', color: 'var(--cta-text)' }}
          initial="rest"
          whileHover={reduced ? 'rest' : 'hover'}
          whileTap={reduced ? 'rest' : 'tap'}
          variants={{
            rest: { y: 0, boxShadow: '0 0px 0px var(--cta-tap-shadow)' },
            hover: { y: -2, boxShadow: '0 8px 24px var(--cta-hover-shadow)' },
            tap:  { y: 0, boxShadow: '0 2px 8px var(--cta-tap-shadow)' },
          }}
          transition={{ duration: 0.18 }}
        >
          Start the conversation
        </motion.a>
      </motion.div>
    </div>
  )
}
