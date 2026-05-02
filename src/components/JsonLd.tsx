export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://clearstack.nz/#business',
    name: 'ClearStack',
    description:
      'Structured web design and AI automation for NZ small businesses. Agency-quality work, without the agency overhead.',
    url: 'https://clearstack.nz',
    email: 'hello@clearstack.nz',
    logo: 'https://clearstack.nz/android-chrome-512x512.png',
    image: 'https://clearstack.nz/og-image.jpg',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Ben Price',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    priceRange: '$$',
    currenciesAccepted: 'NZD',
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'AI Automation',
      'Landing Pages',
      'Business Websites',
      'Web Applications',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ClearStack Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page',
            description:
              'A single-purpose page, designed and built to convert. Ideal for product launches or lead generation.',
          },
          price: '1200',
          priceCurrency: 'NZD',
          priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/InvoicePrice' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Website',
            description:
              'A full business website built with React and Next.js. Up to 6 pages, CMS integration, SEO foundations, and 30 days post-launch support.',
          },
          price: '3500',
          priceCurrency: 'NZD',
          priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/InvoicePrice' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application or AI Tool',
            description:
              'Custom web applications, internal tools, client portals, or AI-powered automation agents built with React and Next.js.',
          },
        },
      ],
    },
    sameAs: [],
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://clearstack.nz/#website',
    name: 'ClearStack',
    url: 'https://clearstack.nz',
    publisher: { '@id': 'https://clearstack.nz/#business' },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://clearstack.nz/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
