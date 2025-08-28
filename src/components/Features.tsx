'use client';

import { useEffect, useRef } from 'react';
import { Smartphone, Zap, Search, Shield, Code, Users } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresGridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    // Observe the section itself for fade-in
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Mouse parallax effect for features grid
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!featuresGridRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply subtle movement to the grid
      if (featuresGridRef.current) {
        featuresGridRef.current.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: 'Responsive Design',
      description: 'Our websites look great on all devices, from desktops to smartphones, with fluid layouts and optimized media.',
      icon: <Smartphone size={28} strokeWidth={1.5} />,
      gradient: 'from-blue-500 to-cyan-400',
      color: 'blue'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized code and efficient hosting for lightning-fast loading times and smooth user experiences.',
      icon: <Zap size={28} strokeWidth={1.5} />,
      gradient: 'from-purple-500 to-pink-400',
      color: 'purple'
    },
    {
      title: 'SEO Friendly',
      description: 'Built with search engines in mind to help your site rank higher and attract more organic traffic.',
      icon: <Search size={28} strokeWidth={1.5} />,
      gradient: 'from-cyan-400 to-blue-500',
      color: 'cyan'
    },
    {
      title: 'Secure & Reliable',
      description: 'We implement the latest security practices to keep your website safe from threats and vulnerabilities.',
      icon: <Shield size={28} strokeWidth={1.5} />,
      gradient: 'from-pink-500 to-purple-500',
      color: 'pink'
    },
    {
      title: 'Modern Technologies',
      description: 'We use the latest frameworks and tools to build future-proof applications with cutting-edge features.',
      icon: <Code size={28} strokeWidth={1.5} />,
      gradient: 'from-blue-500 to-cyan-400',
      color: 'blue'
    },
    {
      title: 'Collaborative Process',
      description: 'We work closely with you throughout the development process to ensure your vision becomes reality.',
      icon: <Users size={28} strokeWidth={1.5} />,
      gradient: 'from-purple-500 to-pink-400',
      color: 'purple'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="features" 
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-purple-950 via-black to-blue-950 opacity-0 translate-y-10 transition-all duration-1000"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        {/* Large glowing orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-400/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/10 blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl animate-spin-slow"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-[20%] w-16 h-16 border border-white/10 rounded-lg rotate-12 animate-float opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-40 right-[15%] w-20 h-20 border border-white/10 rounded-full animate-float opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] right-[10%] w-12 h-12 border border-white/10 rounded-md -rotate-12 animate-float opacity-20" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 opacity-0 translate-y-10 transition-all duration-1000 delay-300" style={{transitionDelay: '0.2s'}}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-purple-300 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Why Choose Us
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mb-8"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            What sets our web development services apart from the rest, delivering exceptional digital experiences.
          </p>
        </div>

        <div 
          ref={featuresGridRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-300 ease-out"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card relative p-8 rounded-2xl glass-dark border border-white/10 shadow-xl opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:border-white/20 group hover-lift" 
              style={{transitionDelay: `${index * 0.1 + 0.3}s`}}
            >
              {/* Gradient top border */}
              <div 
                className="absolute top-0 left-0 w-full h-1 group-hover:h-2 transition-all duration-300 bg-gradient-to-r rounded-t-2xl" 
                style={{ backgroundImage: `linear-gradient(to right, ${feature.color}-500, ${feature.color}-400)` }}
              ></div>
              
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-white/5 to-white/10 group-hover:from-white/10 group-hover:to-white/20 transition-all duration-300 shadow-lg relative overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 p-[1px] rounded-full">
                    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.${feature.color}.400)_0%,theme(colors.${feature.color}.600)_50%,theme(colors.${feature.color}.400)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="transform group-hover:scale-110 transition-transform duration-300 text-white group-hover:text-${feature.color}-400">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title with gradient text on hover */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 ease-in-out" 
                    style={{ backgroundImage: `linear-gradient(to right, theme(colors.${feature.color}.400), theme(colors.${feature.color}.300))` }}>
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                
                {/* Learn more link that appears on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="text-sm text-${feature.color}-400 hover:text-${feature.color}-300 flex items-center gap-1 transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className={`absolute top-0 right-0 w-16 h-1 bg-gradient-to-r ${feature.gradient} transform rotate-45 translate-y-2 opacity-40`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Features;
