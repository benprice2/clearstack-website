'use client';

import { IsoMark } from './Logo';

const darkColors = { t: '#8B5CF6', m: '#6D28D9', b: '#4C1D95' };

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-inner">
        <div className="cta-bg-circle"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-eyebrow">Let&apos;s build something</div>
          <h2 className="cta-h2">Ready to do it properly?</h2>
          <p className="cta-sub">No commitments — just a conversation. Tell me about your project and I&apos;ll come back with a clear scope and timeline.</p>
        </div>
        <div className="cta-actions" style={{ position: 'relative', zIndex: 1 }}>
          <a href="mailto:hello@clearstack.nz" className="cta-btn-primary">
            <IsoMark size={20} colors={darkColors} />
            Email hello@clearstack.nz
          </a>
          <a href="#how-it-works" className="cta-btn-ghost">See how it works →</a>
        </div>
      </div>
    </section>
  );
}
