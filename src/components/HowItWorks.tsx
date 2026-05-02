'use client';

const steps = [
  {
    n: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="4" stroke="#5B21B6" strokeWidth="1.5"/>
        <path d="M7 11h8M7 7.5h5M7 14.5h3" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Discovery',
    body: 'We start with a structured discovery call to understand your business, goals, and what "done right" looks like for you.',
  },
  {
    n: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="6" width="16" height="12" rx="3" stroke="#5B21B6" strokeWidth="1.5"/>
        <path d="M7 2v4M15 2v4" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 12h8M7 15h5" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plan & proposal',
    body: "A clear scope, timeline, and fixed price. No surprises. You know exactly what you're getting and when.",
  },
  {
    n: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="8" width="18" height="6" rx="2" fill="#EDE9FE" stroke="#5B21B6" strokeWidth="1.5"/>
        <rect x="2" y="3" width="18" height="4" rx="2" stroke="#5B21B6" strokeWidth="1.5" opacity="0.5"/>
        <rect x="2" y="15" width="18" height="4" rx="2" stroke="#5B21B6" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    title: 'Build, layer by layer',
    body: 'Designed and built in React & Next.js. Each piece is completed properly before the next begins — no corners cut.',
  },
  {
    n: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#5B21B6" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Launch & automate',
    body: 'Deployed, handed over, and set up with automation where it makes sense — so your site works for you around the clock.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="section-inner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 0 }}>
          <div className="section-label">How it works</div>
          <h2 className="section-h2">One thing at a time,<br/>done properly.</h2>
          <p className="section-sub">No juggling 20 clients at once. Your project gets full attention, start to finish, in four clear stages.</p>
        </div>

        <div className="hiw-grid">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step">
              <div className="hiw-n">{step.n}</div>
              <div className="hiw-icon">{step.icon}</div>
              <div className="hiw-title">{step.title}</div>
              <div className="hiw-body">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
