'use client';

import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  showScrollIndicator?: boolean;
}

export default function PageLayout({ children, showScrollIndicator = true }: PageLayoutProps) {
  const [showScroll, setShowScroll] = useState(showScrollIndicator);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls down
      if (window.scrollY > 100 && showScroll && !isAnimatingOut) {
        // Start fade-out animation
        setIsAnimatingOut(true);
        
        // Remove element after animation completes
        setTimeout(() => {
          setShowScroll(false);
          setIsAnimatingOut(false);
        }, 500); // Match this to animation duration
      } else if (window.scrollY <= 100 && !showScroll && showScrollIndicator) {
        setShowScroll(true);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScroll, isAnimatingOut, showScrollIndicator]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950 via-black to-purple-950 z-[-1]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        {/* Large glowing orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-400/10 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/10 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Navbar />
      <main className="flex flex-col relative z-10">
        {children}
      </main>
      <Footer className="relative z-10" />
      
      {/* Fixed scroll indicator */}
      {showScroll && (
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${isAnimatingOut ? 'animate-fade-out-down' : 'opacity-0 animate-fade-in-up'}`} style={!isAnimatingOut ? {animationDelay: '1s'} : {}}>
          <svg 
            className="w-10 h-10 text-white/70 animate-bounce-slow cursor-pointer" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
