'use client';

import PageLayout from '@/components/PageLayout';
import CTA from '@/components/CTA';

export default function Services() {
  const services = [
    {
      title: 'Website Development',
      description: 'We create beautiful, responsive websites that are tailored to your brand and business needs. Our websites are built with modern technologies and best practices to ensure they are fast, secure, and easy to maintain.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Responsive design for all devices',
        'SEO-friendly structure',
        'Fast loading times',
        'Content management systems',
        'Analytics integration',
        'Social media integration'
      ],
      color: 'var(--blue)'
    },
    {
      title: 'Web Applications',
      description: 'We develop custom web applications with powerful functionality to streamline your business processes. Our applications are built with scalability and performance in mind, ensuring they can grow with your business.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Custom functionality',
        'User authentication',
        'Database integration',
        'API development',
        'Real-time features',
        'Cloud deployment'
      ],
      color: 'var(--red)'
    },
    {
      title: 'SEO Optimization',
      description: 'We help improve your online visibility and drive more traffic to your website. Our SEO services are designed to help your business rank higher in search engine results and attract more qualified leads.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--light-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO',
        'Content strategy',
        'Link building',
        'Performance monitoring'
      ],
      color: 'var(--light-blue)'
    },
    {
      title: 'Maintenance & Support',
      description: 'We provide ongoing maintenance and support to keep your digital presence running smoothly. Our support services ensure your website or application remains secure, up-to-date, and performing optimally.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Regular updates',
        'Security monitoring',
        'Performance optimization',
        'Bug fixes',
        'Content updates',
        'Technical support'
      ],
      color: 'var(--blue)'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Our Services</h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl">
            We offer a comprehensive range of web development services to help your business thrive online.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/10`}>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-blue-300">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">{service.title}</h2>
                </div>
                <p className="mt-4 text-lg text-white/70">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start backdrop-blur-sm bg-white/5 p-3 rounded-xl border border-white/10">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="h-64 sm:h-72 lg:h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-lg overflow-hidden flex items-center justify-center backdrop-blur-sm">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center text-white/70 text-4xl font-light">
                      {service.title.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-6">Ready to Start Your Project?</h2>
          <p className="mt-2 text-lg text-white/70 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how we can help bring your vision to life with our expert web development services.  
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
