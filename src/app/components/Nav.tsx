'use client'

import { useEffect, useState } from 'react'
import { StackMark } from './StackMark'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from './useTheme'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mark scheme: when scrolled or in light theme, use 'light' (dark bg marks)
  const markScheme = scrolled || theme === 'light' ? 'light' : 'dark'

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg-solid)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--nav-border-solid)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-15 flex items-center justify-between">

        {/* Wordmark + mark lockup */}
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label="ClearStack home"
        >
          <StackMark size={26} variant="peek" scheme={markScheme} />
          <span
            className="font-bold text-[17px] tracking-[-0.03em] leading-none transition-colors duration-300"
            style={{ color: scrolled ? 'var(--nav-text-solid)' : 'var(--nav-text)' }}
          >
            ClearStack
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Work', href: '#work' },
            { label: 'Services', href: '#services' },
            { label: 'Process', href: '#process' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) rounded-sm"
              style={{ color: scrolled ? 'var(--nav-link-solid)' : 'var(--nav-link)' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div
          className="flex items-center gap-3 transition-colors duration-300"
          style={{ color: scrolled ? 'var(--nav-text-solid)' : 'var(--nav-text)' }}
        >
          <ThemeToggle />
          <a
            href="#contact"
            className="text-[13px] font-semibold px-3 py-2 rounded-md text-white no-underline transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
            style={{ backgroundColor: 'var(--violet-mid)' }}
          >
            Get in touch
          </a>
        </div>

      </div>
    </nav>
  )
}
