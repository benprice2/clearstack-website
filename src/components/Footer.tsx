'use client';

import { IsoMark } from './Logo';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { dark } = useTheme();
  const lightColors = { t: '#3B0F8C', m: '#5B21B6', b: '#C4B8DC' };
  const darkColors  = { t: '#7C3AED', m: '#4C1D95', b: '#2C0A58' };
  const markColors  = dark ? darkColors : lightColors;

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <IsoMark size={22} colors={markColors} />
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.03em', color: dark ? '#F8F7FF' : '#0D0A1A', transition: 'color 0.3s' }}>
              ClearStack
            </span>
          </div>
          <span className="footer-copy">© 2025 Clearstack Limited. Auckland, New Zealand.</span>
        </div>
        <div className="footer-links">
          <a href="#how-it-works" className="footer-link">How it works</a>
          <a href="#pricing" className="footer-link">Pricing</a>
          <a href="mailto:hello@clearstack.nz" className="footer-link">hello@clearstack.nz</a>
        </div>
        <div className="footer-locale">
          <span>🇳🇿</span> NZ owned &amp; operated
        </div>
      </div>
    </footer>
  );
}
