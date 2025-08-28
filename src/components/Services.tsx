'use client';

import React, { useEffect, useRef } from "react";
import { Code, Layers, LineChart, Smartphone } from "lucide-react";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
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

    // Target all service cards with the new class structure
    const serviceCards = document.querySelectorAll(".animate-fade-in-up");
    serviceCards.forEach((card) => {
      observer.observe(card);
    });
    
    // Observe the section itself for fade-in
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Mouse move effect for cards container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      
      // Target all service cards with the new class structure
      const cards = cardsRef.current.querySelectorAll('.group.relative.glass-dark');
      const rect = cardsRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const distanceX = mouseX - cardCenterX;
        const distanceY = mouseY - cardCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Apply subtle glow effect to cards near the cursor
        const maxDistance = 300;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        if (intensity > 0) {
          (card as HTMLElement).style.boxShadow = `0 0 ${20 * intensity}px ${10 * intensity}px rgba(99, 179, 237, ${0.3 * intensity})`;
        } else {
          (card as HTMLElement).style.boxShadow = '';
        }
      });
    };
    
    if (cardsRef.current) {
      cardsRef.current.addEventListener('mousemove', handleMouseMove as EventListener);
    }
    
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
    };
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive websites that look great on any device and help your business stand out online.",
      icon: <Code size={28} strokeWidth={1.5} />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that provide a seamless user experience on iOS and Android.",
      icon: <Smartphone size={28} strokeWidth={1.5} />,
      color: "purple",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging interfaces to enhance user satisfaction and loyalty.",
      icon: <Layers size={28} strokeWidth={1.5} />,
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales with seamless shopping experiences and secure payment processing.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "SEO Optimization",
      description: "Improve your online visibility and drive more organic traffic to your website with data-driven SEO strategies.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>,
      color: "purple",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support to keep your digital presence running smoothly with regular updates and monitoring.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500",
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="pt-16 pb-24 px-4 relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 -mt-8 z-10 in-view"
    >
      {/* No background elements needed - using fixed background from page.tsx */}
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 opacity-0 translate-y-10 transition-all duration-1000 delay-300 in-view" style={{transitionDelay: '0.2s'}}>

          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Our Services
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional digital solutions tailored to your business needs.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative glass-dark rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/20 opacity-0 translate-y-10 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Gradient top border */}
              <div 
                className="absolute top-0 left-0 w-full h-1 group-hover:h-2 transition-all duration-300 bg-gradient-to-r rounded-t-2xl" 
                style={{ backgroundImage: `linear-gradient(to right, ${service.color}-500, ${service.color}-400)` }}
              ></div>
              
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Icon with gradient background */}
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-white/5 to-white/10 group-hover:from-white/10 group-hover:to-white/20 transition-all duration-300 shadow-lg relative overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 p-[1px] rounded-full">
                    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.${service.color}.400)_0%,theme(colors.${service.color}.600)_50%,theme(colors.${service.color}.400)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="transform group-hover:scale-110 transition-transform duration-300 text-white group-hover:text-${service.color}-400">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title with hover color effect */}
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 ease-in-out group-hover:text-blue-400">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.description}</p>
                
                {/* Button that appears on hover */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="relative px-6 py-3 text-sm font-medium text-white overflow-hidden rounded-full group/button">
                    <span className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r ${service.gradient} opacity-80 group-hover/button:opacity-100`}></span>
                    <span className="absolute inset-0 w-full h-full border border-white/20 rounded-full"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
