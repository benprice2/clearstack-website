'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { HoverMark } from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggleDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lightColors = { t: '#3B0F8C', m: '#5B21B6', b: '#C4B8DC' };
  const darkColors  = { t: '#7C3AED', m: '#4C1D95', b: '#2C0A58' };
  const markColors  = dark ? darkColors : lightColors;

  return (
    <nav style={{ boxShadow: scrolled ? '0 2px 20px rgba(91,33,182,0.08)' : 'none' }}>
      <div className="nav-inner">
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <HoverMark size={28} colors={markColors} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.03em', color: dark ? '#F8F7FF' : '#0D0A1A', transition: 'color 0.3s' }}>
            ClearStack
          </span>
        </a>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <button
            className="theme-toggle"
            onClick={toggleDark}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle dark mode"
            style={{ background: 'none', border: '1px solid rgba(91,33,182,0.15)' }}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="4" fill="#8B5CF6"/>
                <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.22 3.22l1.06 1.06M11.72 11.72l1.06 1.06M11.72 3.22l-1.06 1.06M4.28 11.72l-1.06 1.06" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7z" fill="#5B21B6"/>
              </svg>
            )}
          </button>
          <a href="#contact" className="nav-cta">Get in touch →</a>
        </div>
      </div>
    </nav>
  );
}
