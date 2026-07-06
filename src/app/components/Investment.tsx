'use client'

import { AnimateIn } from './AnimateIn'
import { ThemedMark } from './ThemedMark'

const TIERS = [
  {
    name: 'Landing Page',
    description:
      'A single-purpose page, designed and built to convert. Ideal for product launches or lead gen.',
    features: [
      'Custom design (no templates)',
      'Mobile-responsive, fast-loading',
      'Contact form + lead capture',
      'Basic SEO setup',
      'Deployed & handed over',
    ],
    price: '$1,200',
    priceNote: 'NZD one-off',
    popular: false,
  },
  {
    name: 'Business Website',
    description:
      'A full business website that looks the part, loads fast, and is built to last.',
    features: [
      'Up to 6 pages',
      'Custom React / Next.js build',
      'CMS integration (Sanity)',
      'SEO foundations',
      'Analytics setup',
      '3 months post-launch changes included',
    ],
    price: '$3,500',
    priceNote: 'NZD one-off',
    popular: true,
  },
  {
    name: 'Web Application',
    description:
      'Custom web applications, internal tools, and client portals built to your exact workflow.',
    features: [
      'Requirements & scoping session',
      'Full-stack React / Next.js',
      'API & third-party integrations',
      'Auth, roles & permissions',
      'Documentation & handover',
    ],
    price: 'Custom',
    priceNote: 'scoped per project',
    popular: false,
  },
]

export function Investment() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <AnimateIn>
        <p
          className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
          style={{ color: 'var(--accent)' }}
        >
          Investment
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2
          className="font-heading font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-4 max-w-lg"
          style={{ color: 'var(--heading)' }}
        >
          What you&apos;re paying for.
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <p
          className="text-[15px] md:text-[16px] leading-[1.75] max-w-xl mb-12 md:mb-16"
          style={{ color: 'var(--body)' }}
        >
          Every project is scoped to what you actually need. No feature bloat,
          no padded hours. All prices are estimates — every project is scoped
          before invoicing.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-center">
        {TIERS.map((tier, i) => (
          <AnimateIn key={tier.name} delay={0.1 + i * 0.1}>
            <div
              className={`rounded-lg p-6 flex flex-col relative ${tier.popular ? 'md:p-10 md:py-12' : 'md:p-8'}`}
              style={{
                border: tier.popular
                  ? '1.5px solid var(--accent)'
                  : '1px solid var(--divider)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {tier.popular && (
                <span
                  className="absolute -top-3 left-6 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--cta-text)',
                  }}
                >
                  Most popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-2">
                <div className="shrink-0" aria-hidden="true">
                  <ThemedMark size={22} variant="static" />
                </div>
                <h3
                  className="text-[17px] md:text-[18px] font-bold tracking-[-0.02em]"
                  style={{ color: 'var(--heading)' }}
                >
                  {tier.name}
                </h3>
              </div>

              <p
                className="font-heading font-extrabold text-[36px] md:text-[42px] tracking-[-0.03em] mb-1"
                style={{ color: 'var(--heading)' }}
              >
                {tier.price}
              </p>
              <p
                className="text-[13px] tracking-normal mb-5"
                style={{ color: 'var(--label)' }}
              >
                {tier.priceNote}
              </p>

              <p
                className="text-[14px] leading-[1.7] mb-6"
                style={{ color: 'var(--body)' }}
              >
                {tier.description}
              </p>

              <ul className="space-y-2.5 flex-1" aria-label={`${tier.name} features`}>
                {tier.features.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.6]"
                    style={{ color: 'var(--body)' }}
                  >
                    <span
                      className="shrink-0 mt-[7px] w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
