'use client';

const services = [
  {
    title: 'Business websites',
    desc: 'Clean, fast, conversion-focused sites that represent your business properly and rank well.',
    tag: 'Most popular',
  },
  {
    title: 'Landing pages',
    desc: 'Targeted pages built to convert — for product launches, campaigns, or lead generation.',
    tag: null,
  },
  {
    title: 'Web applications',
    desc: 'Custom tools built with React & Next.js — dashboards, portals, booking systems, anything with logic.',
    tag: null,
  },
  {
    title: 'AI agents & automation',
    desc: 'Automate repetitive tasks with AI. From lead follow-up to document processing — built on solid foundations.',
    tag: 'New',
  },
];

export default function Services() {
  return (
    <section className="section services-section">
      <div className="section-inner">
        <div className="section-label">Services</div>
        <h2 className="section-h2">What I build</h2>
        <p className="section-sub" style={{ marginBottom: 56 }}>Four core services. All delivered with the same structured, methodical approach.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="service-card-title">{s.title}</span>
                {s.tag && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                    padding: '3px 9px', borderRadius: 20,
                    background: s.tag === 'New' ? 'var(--void)' : 'var(--mist)',
                    color: s.tag === 'New' ? 'var(--violet-glow)' : 'var(--violet)',
                  }}>{s.tag}</span>
                )}
              </div>
              <p className="service-card-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
