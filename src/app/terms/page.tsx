import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | ClearStack',
  description: 'Terms and conditions for using the ClearStack website and services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <h1
        className="font-heading font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-8"
        style={{ color: 'var(--heading)' }}
      >
        Terms &amp; Conditions
      </h1>

      <div
        className="space-y-6 text-[15px] leading-[1.75]"
        style={{ color: 'var(--body)' }}
      >
        <p>
          <strong style={{ color: 'var(--heading)' }}>Effective date:</strong> 24 June 2026
        </p>

        <p>
          These terms govern your use of the ClearStack website (clearstack.co.nz) and any services we provide.
          By using our website or engaging our services, you agree to these terms.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Services
        </h2>
        <p>
          ClearStack provides custom web design, web development, and software development services.
          All project work is governed by a separate project agreement or statement of work agreed upon
          before work begins.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Quotes and pricing
        </h2>
        <p>
          Prices listed on our website are estimates in New Zealand Dollars (NZD) and exclude GST unless
          otherwise stated. Final pricing is confirmed in a project proposal after a scoping conversation.
          Quotes are valid for 30 days unless otherwise specified.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Payment
        </h2>
        <p>
          Payment terms are outlined in each project agreement. Typical terms are 50% deposit
          before work begins and 50% on completion. Invoices are due within 14 days of issue
          unless otherwise agreed.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Intellectual property
        </h2>
        <p>
          Upon full payment, you own the custom code and design assets created for your project.
          We retain the right to showcase the work in our portfolio unless otherwise agreed.
          Third-party tools, fonts, and open-source libraries remain under their respective licences.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by New Zealand law, ClearStack&apos;s total liability for any
          claim arising from our services is limited to the amount you paid for the specific project
          in question. We are not liable for indirect, incidental, or consequential damages.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Website use
        </h2>
        <p>
          You may use this website for lawful purposes only. You must not attempt to gain unauthorised
          access to our systems, introduce malicious code, or use the site in any way that could
          damage or impair its availability.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Changes to these terms
        </h2>
        <p>
          We may update these terms from time to time. Continued use of our website or services
          after changes constitutes acceptance of the updated terms.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of New Zealand. Any disputes will be subject to the
          exclusive jurisdiction of the New Zealand courts.
        </p>

        <p className="pt-4">
          Questions? Email us at{' '}
          <a href="mailto:hello@clearstack.co.nz" className="underline" style={{ color: 'var(--accent)' }}>
            hello@clearstack.co.nz
          </a>
        </p>
      </div>
    </main>
  )
}
