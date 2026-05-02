'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How much does a website cost in New Zealand?',
    a: 'ClearStack offers fixed-price packages starting at $1,200 NZD for a landing page and $3,500 NZD for a full business website (up to 6 pages). Web applications and AI tools are scoped per project. All prices are quoted upfront before any work begins — no hourly surprises.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A landing page typically takes 1–2 weeks. A full business website takes 3–4 weeks. Web applications vary depending on scope, which is defined clearly in the proposal stage. You get a firm timeline before any work starts.',
  },
  {
    q: 'What technology do you use?',
    a: 'All sites are built with React and Next.js — the same stack used by large companies like Vercel, Notion, and Nike. This means fast load times, excellent SEO performance, and a codebase that&apos;s easy to maintain and extend. Sanity CMS is used for content-managed sites.',
  },
  {
    q: 'Do you work with businesses outside Auckland?',
    a: 'Yes. While ClearStack is based in Auckland, all project work is done remotely and I work with clients across New Zealand. Discovery calls and reviews are done over video call.',
  },
  {
    q: 'What is included in the 30-day post-launch support?',
    a: 'After launch, I cover any bugs, content tweaks, and minor adjustments that come up as you start using the site. It&apos;s a buffer to make sure everything is working exactly as expected before we close out the project.',
  },
  {
    q: 'Can you help automate parts of my business with AI?',
    a: 'Yes — AI agents and workflow automation are a core ClearStack service. This includes things like automated lead follow-up, document processing, internal tools that use AI, and integrations between your existing software. Everything is built on a solid technical foundation, not fragile no-code shortcuts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a.replace(/&apos;/g, "'"),
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" style={{ paddingBottom: 80 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-inner">
        <div className="section-label">FAQ</div>
        <h2 className="section-h2">Common questions</h2>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Straight answers to the things people usually ask before getting in touch.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 760 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  border: `1px solid ${isOpen ? 'rgba(91,33,182,0.2)' : 'rgba(91,33,182,0.08)'}`,
                  background: isOpen ? 'var(--mist)' : 'var(--white)',
                  transition: 'border-color 0.2s, background 0.2s',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '20px 24px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    fontFamily: 'var(--font)',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--void)', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: 24, height: 24, borderRadius: '50%',
                    background: isOpen ? 'var(--violet)' : 'var(--mist)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s, transform 0.2s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke={isOpen ? 'white' : '#5B21B6'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', fontSize: 14, lineHeight: 1.7, color: 'var(--slate-mid)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
