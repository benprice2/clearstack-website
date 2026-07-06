'use client'

import { useState } from 'react'
import { AnimateIn } from './AnimateIn'

const FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'A landing page starts from $1,200 NZD that\u2019s a single custom-designed page built to convert, with a contact form and basic SEO. A full business website starts from $3,500 NZD and includes up to six pages, CMS integration, SEO foundations, analytics, and three months of post-launch changes. Web applications are scoped and quoted per project. Every project is priced upfront so there are no surprises.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'A landing page typically takes 1 to 2 weeks from kickoff to launch. A multi-page business website takes 4 to 8 weeks depending on the number of pages and how quickly we move through discovery and feedback together. We don\u2019t rush the research phase because getting the foundations right saves time overall.',
  },
  {
    q: 'Why not just use Squarespace or Wix?',
    a: 'Template builders are fine for a placeholder, but they weren\u2019t designed for your business. You\u2019re limited to their layouts, their page speed, and their SEO ceiling. A custom build is designed around how your customers actually think, loads faster, ranks better, and doesn\u2019t force you to work around someone else\u2019s constraints.',
  },
  {
    q: 'Do I own the code and the website?',
    a: 'Yes. You own everything we build. The design files, the source code, and the deployed site are all yours. If you ever want to move to a different developer, you can take it all with you.',
  },
  {
    q: 'What does ongoing maintenance look like?',
    a: 'After launch, we offer optional monthly maintenance that covers security updates, performance monitoring, and minor content changes. Most NZ businesses want peace of mind that their site stays healthy without needing to think about it. Maintenance is month-to-month with no lock-in.',
  },
  {
    q: 'How do you price SaaS and web application projects?',
    a: 'Custom software is quoted per project after a scoping phase where we map out your workflow, integrations, and user roles. There\u2019s no hourly rate guessing. You get a fixed scope and a fixed price before any development begins.',
  },
  {
    q: 'I\u2019m not technical. Will I understand what\u2019s happening?',
    a: 'That\u2019s the point. We handle the technical decisions and explain them in plain language. You\u2019ll see real progress weekly and have a direct line to the person building your project. No jargon, no handoffs between account managers.',
  },
  {
    q: 'Are you based in New Zealand?',
    a: 'Yes. ClearStack is based in Auckland. We work with businesses across New Zealand. All communication happens in NZ business hours and everything is invoiced in NZD.',
  },
]

// FAQPage schema for search engines and AI
function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false)

  return (
    <AnimateIn delay={delay}>
      <div
        style={{ borderBottom: '1px solid var(--divider-alt)' }}
      >
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-alt) rounded-sm"
          aria-expanded={open}
        >
          <h3
            className="text-[15px] md:text-[16px] font-bold tracking-[-0.01em]"
            style={{ color: 'var(--heading-alt)' }}
          >
            {q}
          </h3>
          <span
            className="shrink-0 w-5 h-5 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className="transition-transform duration-300"
              style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <path d="M6 0v12M0 6h12" stroke="var(--accent-alt)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: open ? 500 : 0,
            opacity: open ? 1 : 0,
          }}
        >
          <p
            className="text-[14px] md:text-[15px] leading-[1.7] pb-5 md:pb-6 pr-10"
            style={{ color: 'var(--body-alt)' }}
          >
            {a}
          </p>
        </div>
      </div>
    </AnimateIn>
  )
}

export function FAQ() {
  return (
    <>
      <FAQSchema />
      <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16">
        <AnimateIn>
          <p
            className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
            style={{ color: 'var(--accent-alt)' }}
          >
            Questions
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2
            className="font-heading font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-10 md:mb-12 max-w-md"
            style={{ color: 'var(--heading-alt)' }}
          >
            Things people actually ask.
          </h2>
        </AnimateIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16"
          style={{ borderTop: '1px solid var(--divider-alt)' }}
        >
          {FAQS.map(({ q, a }, i) => (
            <FAQItem key={i} q={q} a={a} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </>
  )
}
