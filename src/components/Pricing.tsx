'use client';

const plans = [
  {
    name: 'Landing page',
    price: '800',
    period: 'NZD · one-off',
    desc: 'A single-purpose page, designed and built to convert. Ideal for product launches or lead gen.',
    features: [
      'Custom design (no templates)',
      'Mobile-responsive, fast-loading',
      'Contact form + lead capture',
      'Basic SEO setup',
      'Deployed & handed over',
    ],
    cta: 'Get started',
    ctaStyle: 'light',
    featured: false,
  },
  {
    name: 'Business website',
    price: '2,500',
    period: 'NZD · one-off',
    desc: 'A full business website that looks the part, loads fast, and is built to last.',
    features: [
      'Up to 6 pages',
      'Custom React / Next.js build',
      'CMS integration (Sanity)',
      'SEO foundations',
      'Analytics setup',
      '3 months post-launch changes included',
    ],
    cta: 'Most popular',
    ctaStyle: 'dark',
    featured: true,
  },
  {
    name: 'Web app or AI tool',
    price: 'Custom',
    period: 'scoped per project',
    desc: 'Custom web applications, internal tools, client portals, or AI-powered automation agents.',
    features: [
      'Requirements & scoping session',
      'Full-stack React / Next.js',
      'API & third-party integrations',
      'AI agent / workflow automation',
      'Documentation & handover',
    ],
    cta: "Let's talk",
    ctaStyle: 'light',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-inner">
        <div className="section-label">Pricing</div>
        <h2 className="section-h2">Transparent, fixed pricing.</h2>
        <p className="section-sub">No hourly surprises. Every project is scoped and priced upfront so you know exactly what you&apos;ll pay.</p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <span className="pricing-badge">Most popular</span>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">
                {plan.price !== 'Custom' && <sup>$</sup>}
                {plan.price}
              </div>
              <div className="pricing-period">{plan.period}</div>
              <div className="pricing-divider"></div>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-features">
                {plan.features.map((f, j) => (
                  <div key={j} className="pricing-feature">
                    <div className="feat-check">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke={plan.featured ? '#8B5CF6' : '#5B21B6'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#contact" className={`pricing-cta ${plan.ctaStyle}`}>
                {plan.cta} {plan.ctaStyle === 'dark' ? '→' : ''}
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          All prices are estimates — every project is scoped before invoicing.{' '}
          <a href="#contact">Let&apos;s talk first.</a>
        </p>
      </div>
    </section>
  );
}
