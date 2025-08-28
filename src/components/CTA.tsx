'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

const CTA = () => {
  const buttonRef1 = useRef<HTMLAnchorElement>(null);
  const buttonRef2 = useRef<HTMLAnchorElement>(null);
  
  // Button hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, buttonEl: HTMLElement) => {
      const rect = buttonEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      buttonEl.style.setProperty('--x', `${x}px`);
      buttonEl.style.setProperty('--y', `${y}px`);
    };
    
    const button1 = buttonRef1.current;
    const button2 = buttonRef2.current;
    
    if (button1) {
      const handleButton1MouseMove = (e: MouseEvent) => handleMouseMove(e, button1);
      button1.addEventListener('mousemove', handleButton1MouseMove);
      return () => button1.removeEventListener('mousemove', handleButton1MouseMove);
    }
    
    if (button2) {
      const handleButton2MouseMove = (e: MouseEvent) => handleMouseMove(e, button2);
      button2.addEventListener('mousemove', handleButton2MouseMove);
      return () => button2.removeEventListener('mousemove', handleButton2MouseMove);
    }
  }, []);
  
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* No background needed - using fixed background from page.tsx */}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-dark rounded-2xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to transform your online presence?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Let's work together to create a website that drives results for your business.
          </p>
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/contact"
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              ref={buttonRef1}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="absolute inset-0 w-0 h-0 rounded-full bg-white/20 transition-all duration-500 ease-out" style={{left: 'var(--x)', top: 'var(--y)', transform: 'translate(-50%, -50%)'}}></span>
              <span className="relative z-10 flex items-center justify-center">
                Contact Us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="relative px-8 py-4 rounded-full bg-transparent border border-white/30 backdrop-blur-sm text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              ref={buttonRef2}
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="absolute inset-0 w-0 h-0 rounded-full bg-white/20 transition-all duration-500 ease-out" style={{left: 'var(--x)', top: 'var(--y)', transform: 'translate(-50%, -50%)'}}></span>
              <span className="relative z-10 flex items-center justify-center">
                View Our Work
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
              </span>
            </Link>
          </div>
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

export default CTA;
