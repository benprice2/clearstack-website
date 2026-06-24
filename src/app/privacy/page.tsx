import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ClearStack',
  description: 'How ClearStack collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <h1
        className="font-heading font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.03em] mb-8"
        style={{ color: 'var(--heading)' }}
      >
        Privacy Policy
      </h1>

      <div
        className="space-y-6 text-[15px] leading-[1.75]"
        style={{ color: 'var(--body)' }}
      >
        <p>
          <strong style={{ color: 'var(--heading)' }}>Effective date:</strong> 24 June 2026
        </p>

        <p>
          ClearStack (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website clearstack.co.nz.
          This page explains what information we collect, why we collect it, and your rights regarding that information.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Information we collect
        </h2>
        <p>
          When you use our contact form we collect your name, email address, and the contents of your message.
          We may also collect basic analytics data (pages visited, referral source, device type) through privacy-respecting analytics tools.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          How we use your information
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To respond to your enquiry</li>
          <li>To improve our website and services</li>
          <li>To send project-related communications you have requested</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Data storage and security
        </h2>
        <p>
          Your data is stored securely using industry-standard practices. We retain contact form submissions
          only as long as necessary to fulfil the purpose for which they were collected.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Cookies
        </h2>
        <p>
          We use a single local-storage key to remember your theme preference (light or dark mode).
          We do not use tracking cookies or third-party advertising cookies.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Your rights
        </h2>
        <p>
          Under the New Zealand Privacy Act 2020, you have the right to access, correct, or request deletion
          of your personal information. Contact us at hello@clearstack.co.nz to make a request.
        </p>

        <h2 className="font-bold text-[18px] pt-4" style={{ color: 'var(--heading)' }}>
          Changes to this policy
        </h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with an updated effective date.
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
