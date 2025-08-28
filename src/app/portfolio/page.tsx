'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Salazar Marine Work',
      category: 'Professional Website',
      description: 'A professional website for a marine services company specializing in boat painting, boat building, and Propspeed application.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'var(--light-blue)',
      image: '/images/smarine.jpg',
      link: 'https://www.smarine.co.nz'
    },
    {
      title: 'EcoStore',
      category: 'E-commerce',
      description: 'A modern e-commerce platform for sustainable products with a seamless shopping experience.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
      color: 'var(--blue)',
      image: '/placeholder-project.svg'
    },
    {
      title: 'TaskFlow',
      category: 'Web Application',
      description: 'A productivity application that helps teams manage projects, tasks, and deadlines efficiently.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      color: 'var(--red)',
      image: '/placeholder-project.svg'
    },
    {
      title: 'FoodDelivery',
      category: 'Mobile App',
      description: 'A food delivery application connecting local restaurants with hungry customers.',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      color: 'var(--orange)',
      image: '/placeholder-project.svg'
    },
    {
      title: 'HealthTracker',
      category: 'Web Application',
      description: 'A health and fitness tracking platform that helps users achieve their wellness goals.',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      color: 'var(--yellow)',
      image: '/placeholder-project.svg'
    },
    {
      title: 'TravelBlog',
      category: 'Blog',
      description: 'A travel blog showcasing destinations, tips, and stories from around the world.',
      tags: ['WordPress', 'Custom Theme', 'SEO Optimization'],
      color: 'var(--light-blue)',
      image: '/placeholder-project.svg'
    },
    {
      title: 'RealEstate',
      category: 'Website',
      description: 'A real estate website featuring property listings, virtual tours, and agent profiles.',
      tags: ['Next.js', 'Tailwind CSS', 'Mapbox', 'Contentful'],
      color: 'var(--blue)',
      image: '/placeholder-project.svg'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Our Portfolio</h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image.endsWith('.jpg') || project.image.endsWith('.png') ? (
                    <div className="w-full h-full overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <span className="text-3xl text-white/70">{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 text-base text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 font-medium flex items-center transition-colors">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-xl max-w-7xl mx-auto my-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Our Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/70">
            How we bring your ideas to life through our proven development process.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-between">
              {['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Support'].map((step, index) => (
                <div key={index} className="px-4 backdrop-blur-sm bg-transparent">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg border border-white/20">
                    {index + 1}
                  </div>
                  <div className="mt-2 text-sm font-medium text-white/80">{step}</div>
                </div>
              ))}
            </div>
          </div>
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
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
