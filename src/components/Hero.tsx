'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Hero = () => {
  const [shrinkFactor, setShrinkFactor] = useState(0); // 0 to 1, where 1 is fully shrunk
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate shrink factor based on scroll position (0 to 1)
      const maxShrinkScroll = 200; // Scroll position where shrinking reaches maximum
      const newShrinkFactor = Math.min(window.scrollY / maxShrinkScroll, 1);
      setShrinkFactor(newShrinkFactor);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate the dynamic styles based on scroll position
  const heroStyles = {
    height: `${100 - shrinkFactor * 60}vh`, // Shrink from 100vh to 40vh
    transition: 'height 0.3s ease-out'
  };
  
  return (
    <div 
      ref={heroRef} 
      className="relative overflow-hidden flex items-center"
      style={heroStyles}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8">
            <div className="space-y-5 opacity-0 translate-y-10 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block text-white">Modern Web</span>
                <span className="block mt-2 gradient-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                We create stunning, high-performance websites and web applications with cutting-edge technology that helps your business thrive in the digital world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10 animate-fade-in-up justify-center" style={{animationDelay: '0.3s'}}>
              <Link href="/contact" 
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white rounded-full group hover-lift">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-600 opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              <Link href="/portfolio" 
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10 hover-lift">
                <span className="relative flex items-center gap-2">
                  View Our Work
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
