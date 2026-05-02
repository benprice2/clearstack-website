'use client';

import PageLayout from '@/components/PageLayout';

export default function Contact() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Contact Us</h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl">
            Have a project in mind? Get in touch with our team to see how we can help.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Get in Touch</h2>
            <p className="mt-4 text-lg text-white/70">
              We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-white/80">
                  <p>info@clearstack.com</p>
                </div>
              </div>
              <div className="flex items-start backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-white/80">
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-white/80">
                  <p>123 Web Dev Street</p>
                  <p>Digital City, 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 p-8 shadow-xl rounded-2xl border border-white/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="py-3 px-4 block w-full bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 placeholder-white/40"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="py-3 px-4 block w-full bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 placeholder-white/40"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="py-3 px-4 block w-full bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 placeholder-white/40"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full bg-white/5 border-white/10 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 placeholder-white/40"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
