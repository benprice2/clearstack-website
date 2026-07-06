import Image from 'next/image'
import { Nav } from './components/Nav'
import { ThemedMark } from './components/ThemedMark'
import { ContactForm } from './components/ContactForm'
import { HeroContent } from './components/HeroContent'
import { AnimateIn } from './components/AnimateIn'
import { HeroDashboard } from './components/HeroDashboard'
import { HeroDepthField } from './components/HeroDepthField'
import { ProcessScroll } from './components/ProcessScroll'
import { Investment } from './components/Investment'
import { FAQ } from './components/FAQ'

// ── Shared label style ───────────────────────────────────────
function Label({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <p
      className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
      style={{ color: primary ? 'var(--label)' : 'var(--accent-alt)' }}
    >
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        style={{ backgroundColor: 'var(--cta-bg)', color: 'var(--cta-text)' }}
      >
        Skip to content
      </a>
      <Nav />

      <main id="main">

      {/* ════════════════════════════════════════════════
          HERO — primary surface, Stack Build on load
      ════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative z-10 flex flex-col min-h-svh md:min-h-screen pt-15 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <HeroDepthField />

        <div className="flex-1 flex items-center max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <div className="flex items-center gap-10 xl:gap-14 w-full">

            {/* Copy column — 2/3 width */}
            <div className="flex-2 min-w-0">
              <HeroContent />
            </div>

            {/* Hero dashboard mockup — 1/3 width, desktop only */}
            <div className="hidden lg:flex flex-1 justify-end">
              <HeroDashboard />
            </div>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════════════
          WORK — secondary surface
          Proof before promises
      ════════════════════════════════════════════════ */}
      <section
        id="work"
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16">
          <AnimateIn><Label>Our work</Label></AnimateIn>

          <AnimateIn delay={0.1}>
            <h2
              className="font-heading font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-12 md:mb-16 max-w-sm"
              style={{ color: 'var(--heading-alt)' }}
            >
              What we&apos;ve shipped.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* Project 1 — Website */}
            <AnimateIn delay={0}>
              <article>
                {/* Browser chrome frame */}
                <div
                  className="rounded-lg overflow-hidden mb-5"
                  style={{ border: '1px solid var(--divider-alt)' }}
                >
                  {/* Chrome bar */}
                  <div
                    className="flex items-center gap-3 px-3 py-2.5"
                    style={{ backgroundColor: 'var(--chrome-bg)', borderBottom: '1px solid var(--divider-alt)' }}
                  >
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-1)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-2)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-3)' }} />
                    </div>
                    <div
                      className="flex-1 h-5 rounded flex items-center px-2"
                      style={{ backgroundColor: 'var(--chrome-bar)', maxWidth: 220 }}
                      aria-hidden="true"
                    >
                      <span className="text-[9px] tracking-wide opacity-80" style={{ color: 'var(--chrome-url)' }}>www.smarine.co.nz</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src="/images/work/cs-work-website.webp"
                    alt="Salazar Marine website"
                    width={2400}
                    height={1500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto block"
                  />
                </div>
                {/* Project meta */}
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: 'var(--accent-alt)' }}
                >
                  Website Design & Development
                </p>
                <h3
                  className="text-[17px] font-bold tracking-[-0.02em] mb-2"
                  style={{ color: 'var(--heading-alt)' }}
                >
                  Salazar Marine
                </h3>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ color: 'var(--body-alt)' }}
                >
                  Oliver Salazar runs one of Tauranga&apos;s most respected marine workshops. Boat building, painting, and
                  detailing. We built a site that reflects the quality of the craft: custom-designed, not templated.
                </p>
              </article>
            </AnimateIn>

            {/* Project 2 — App / SaaS */}
            <AnimateIn delay={0.15}>
              <article>
                {/* Browser chrome frame */}
                <div
                  className="rounded-lg overflow-hidden mb-5"
                  style={{ border: '1px solid var(--divider-alt)' }}
                >
                  {/* Chrome bar */}
                  <div
                    className="flex items-center gap-3 px-3 py-2.5"
                    style={{ backgroundColor: 'var(--chrome-bg)', borderBottom: '1px solid var(--divider-alt)' }}
                  >
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-1)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-2)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--chrome-dot-3)' }} />
                    </div>
                    <div
                      className="flex-1 h-5 rounded flex items-center px-2"
                      style={{ backgroundColor: 'var(--chrome-bar)', maxWidth: 220 }}
                      aria-hidden="true"
                    >
                      <span className="text-[9px] tracking-wide opacity-80" style={{ color: 'var(--chrome-url)' }}>www.malmomarine.co.nz</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src="/images/work/cs-work-app.webp"
                    alt="Malmo Marine application"
                    width={2400}
                    height={1500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto block"
                  />
                </div>
                {/* Project meta */}
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: 'var(--accent-alt)' }}
                >
                  SaaS & Web Application
                </p>
                <div className="flex items-center gap-2.5 mb-2">
                  <h3
                    className="text-[17px] font-bold tracking-[-0.02em]"
                    style={{ color: 'var(--heading-alt)' }}
                  >
                    Malmo Marine
                  </h3>
                  <span
                    className="text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent)', border: '1px solid var(--badge-border)' }}
                  >
                    In progress
                  </span>
                </div>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ color: 'var(--body-alt)' }}
                >
                  Seafarers carry complex credential requirements across vessels, roles, and flag states. Malmo Marine
                  lets mariners upload and track their tickets, qualifications, and sea time in one place.
                </p>
              </article>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES — primary surface
          Diagonal break from secondary surface above
      ════════════════════════════════════════════════ */}
      <section
        id="services"
        style={{
          backgroundColor: 'var(--bg-primary)',
          clipPath: 'polygon(0 4vw, 100% 0, 100% 100%, 0 100%)',
          marginTop: '-4vw',
          paddingTop: 'calc(4vw + clamp(48px, 8vw, 80px))',
          paddingBottom: 'clamp(56px, 8vw, 96px)',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16">
          <AnimateIn><Label primary>What we build</Label></AnimateIn>

          <AnimateIn delay={0.1}>
            <h2
              className="font-heading font-bold text-[36px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-12 md:mb-16 max-w-sm"
              style={{ color: 'var(--heading)' }}
            >
              Websites and SaaS, built to last.
            </h2>
          </AnimateIn>

          <div
            className="flex flex-col"
            style={{ borderTop: '1px solid var(--divider)' }}
          >
            {/* Row 1 — Website Design */}
            <AnimateIn delay={0} style={{ borderBottom: '1px solid var(--divider)' }}>
              <div className="cs-service-row flex items-start gap-6 md:gap-8 py-8 md:py-10">
                <div className="shrink-0 pt-1" aria-hidden="true">
                  <ThemedMark size={28} variant="static" />
                </div>
                <div>
                  <h3
                    className="text-[17px] md:text-[18px] font-bold tracking-[-0.02em] mb-3"
                    style={{ color: 'var(--heading)' }}
                  >
                    Website Design & Development
                  </h3>
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.75] max-w-2xl"
                    style={{ color: 'var(--body)' }}
                  >
                    Your website is the most visible proof that you do good work.
                    We design and build custom websites for NZ businesses. Not
                    Squarespace themes with your logo swapped in, not a template
                    with your colours. Designed from research into how your
                    customers think, built to perform, and maintained to stay
                    there.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Row 2 — SaaS & Apps */}
            <AnimateIn delay={0.18}>
              <div className="cs-service-row flex items-start gap-6 md:gap-8 py-8 md:py-10">
                <div className="shrink-0 pt-1" aria-hidden="true">
                  <ThemedMark size={22} variant="static" />
                </div>
                <div>
                  <h3
                    className="text-[17px] md:text-[18px] font-bold tracking-[-0.02em] mb-3"
                    style={{ color: 'var(--heading)' }}
                  >
                    SaaS & Web Applications
                  </h3>
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.75] max-w-2xl"
                    style={{ color: 'var(--body)' }}
                  >
                    When your business process can&apos;t fit inside existing software,
                    we build the software. Custom web applications designed to
                    your exact workflow. Every field, every rule, every edge case
                    built for how you actually operate, not the median user.
                  </p>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROCESS — tertiary surface, scroll-driven phases
      ════════════════════════════════════════════════ */}
      <section
        id="process"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <ProcessScroll />
      </section>

      {/* ════════════════════════════════════════════════
          INVESTMENT — primary surface
      ════════════════════════════════════════════════ */}
      <section
        id="investment"
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Investment />
      </section>

      {/* ════════════════════════════════════════════════
          FAQ — tertiary surface
      ════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <FAQ />
      </section>

      {/* ════════════════════════════════════════════════
          CONTACT + FOOTER — primary surface
          Diagonal break from FAQ above
      ════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{
          backgroundColor: 'var(--bg-primary)',
          clipPath: 'polygon(0 4vw, 100% 0, 100% 100%, 0 100%)',
          marginTop: '-4vw',
          paddingTop: 'calc(4vw + clamp(48px, 8vw, 80px))',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
        }}
      >
        <div
          className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16"
        >
          {/* CTA header */}
          <AnimateIn className="text-center mb-10 md:mb-12">
            <h2
              className="font-heading font-bold leading-[1] tracking-[-0.04em] mb-4"
              style={{
                color: 'var(--heading)',
                fontSize: 'clamp(32px, 4vw, 56px)',
              }}
            >
              Ready to build it right?
            </h2>
            <p
              className="text-[15px]"
              style={{ color: 'var(--label)' }}
            >
              Tell us what you&apos;re working on.
            </p>
          </AnimateIn>

          <ContactForm />

          {/* Footer */}
          <footer
            className="mt-12 md:mt-16 pt-8"
            style={{ borderTop: '1px solid var(--divider)' }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between text-[12px]" style={{ color: 'var(--body-faint)' }}>
              <div className="flex items-center gap-2.5">
                <ThemedMark size={14} variant="static" />
                <span
                  className="font-bold text-[13px] tracking-[-0.02em]"
                  style={{ color: 'var(--heading)' }}
                >
                  ClearStack
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: 'var(--label)' }}
                >
                  Auckland · NZ
                </span>
              </div>
              <div className="flex items-center justify-between gap-5 sm:gap-6">
                <p>&copy; {new Date().getFullYear()} ClearStack</p>
                <div className="flex gap-5">
                  <a href="/privacy" className="no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--body-faint)' }}>Privacy</a>
                  <a href="/terms" className="no-underline transition-colors duration-200 hover:text-white" style={{ color: 'var(--body-faint)' }}>Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      </main>
    </>
  )
}
