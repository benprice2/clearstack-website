'use client';

export default function Hero() {
  const steps = [
    { n: '✓', state: 'done',    title: 'Discovery call',     sub: 'Requirements captured' },
    { n: '✓', state: 'done',    title: 'Proposal sent',      sub: 'Scope & timeline agreed' },
    { n: '3', state: 'active',  title: 'Build',              sub: 'Next.js · Wk 2/4' },
    { n: '4', state: 'pending', title: 'Review & launch',    sub: 'Handover + automation setup' },
  ];

  return (
    <section style={{ paddingTop: 160, paddingBottom: 100, paddingLeft: 40, paddingRight: 40 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 80 }}>

        {/* Left: Copy */}
        <div>
          <div className="hero-eyebrow animate-in">
            <span className="hero-eyebrow-dot"></span>
            Auckland, NZ · Web &amp; AI Automation
          </div>
          <h1 className="hero-h1 animate-in delay-1">
            Build it right,<br /><em>then automate it.</em>
          </h1>
          <p className="hero-sub animate-in delay-2">
            Structured web design and AI automation for NZ small businesses. Agency-quality work, without the agency overhead.
          </p>
          <div className="hero-actions animate-in delay-3">
            <a href="#contact" className="btn-primary">
              Get in touch <span>→</span>
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See how it works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="hero-visual animate-in delay-2">
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-badge">Your Project</span>
              <span className="hero-card-status">
                <span className="status-dot"></span> In progress
              </span>
            </div>
            <div className="hero-steps">
              {steps.map((s, i) => (
                <div key={i} className={`hero-step${s.state === 'active' ? ' active' : ''}`}>
                  <div className={`step-num ${s.state}`}>{s.n}</div>
                  <div>
                    <div className="step-text">{s.title}</div>
                    <div className="step-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
