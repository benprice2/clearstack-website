'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const prevScrollY = useRef(0);
  const pathname = usePathname();
  
  // Extract the active link from the pathname
  const getActiveLinkFromPath = (path: string) => {
    if (path === '/') return 'home';
    // Remove the leading slash and return the first segment
    return path.substring(1).split('/')[0];
  };
  
  const [activeLink, setActiveLink] = useState(getActiveLinkFromPath(pathname || '/'));
  
  // Update active link when pathname changes
  useEffect(() => {
    setActiveLink(getActiveLinkFromPath(pathname || '/'));
  }, [pathname]);
  
  // Initially hide navbar on all pages
  useEffect(() => {
    // Initially hide the navbar on all pages
    setVisible(false);
    
    // After a delay, allow the navbar to appear on scroll up
    const timer = setTimeout(() => {
      // This doesn't make the navbar visible, just allows the scroll handler to control it
      prevScrollY.current = window.scrollY;
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Store initial scroll position
    prevScrollY.current = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar when menu is open
      if (isMenuOpen) {
        setVisible(true);
        prevScrollY.current = currentScrollY;
        return;
      }
      
      // Always show navbar at the top of the page
      if (currentScrollY < 100) {
        setVisible(true);
        prevScrollY.current = currentScrollY;
        return;
      }
      
      // Determine scroll direction with a small threshold (2px)
      // This helps avoid tiny fluctuations triggering visibility changes
      const isScrollingDown = currentScrollY > prevScrollY.current + 2;
      const isScrollingUp = currentScrollY < prevScrollY.current - 2;
      
      // Update visibility based on scroll direction
      if (isScrollingDown) {
        setVisible(false);
      } else if (isScrollingUp) {
        setVisible(true);
      }
      
      // Store current position for next comparison
      prevScrollY.current = currentScrollY;
    };
    
    // Add throttling to avoid performance issues
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const throttledScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Ensure navbar stays visible when menu is open
    if (!isMenuOpen) {
      setVisible(true);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md bg-black/20 py-4 ${visible ? 'top-0' : '-top-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="transition-all duration-500">
              <Logo />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === 'home' ? 'text-white' : 'text-gray-200'} hover:text-white group`}
              onClick={() => setActiveLink('home')}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${activeLink === 'home' ? 'w-full' : ''}`}></span>
            </Link>
            <Link href="/services" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === 'services' ? 'text-white' : 'text-gray-200'} hover:text-white group`}
              onClick={() => setActiveLink('services')}
            >
              <span className="relative z-10">Services</span>
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${activeLink === 'services' ? 'w-full' : ''}`}></span>
            </Link>
            <Link href="/portfolio" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === 'portfolio' ? 'text-white' : 'text-gray-200'} hover:text-white group`}
              onClick={() => setActiveLink('portfolio')}
            >
              <span className="relative z-10">Portfolio</span>
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${activeLink === 'portfolio' ? 'w-full' : ''}`}></span>
            </Link>
            <Link href="/about" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === 'about' ? 'text-white' : 'text-gray-200'} hover:text-white group`}
              onClick={() => setActiveLink('about')}
            >
              <span className="relative z-10">About</span>
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${activeLink === 'about' ? 'w-full' : ''}`}></span>
            </Link>
            <Link href="/contact" 
              className="ml-3 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white rounded-full group hover-lift"
              onClick={() => setActiveLink('contact')}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2">
                Contact Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden fixed inset-0 z-50 transition-all duration-500`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 to-black/95 backdrop-blur-xl"></div>
        
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 rounded-full text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full justify-center items-center space-y-8 pt-20 pb-10">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <Link 
            href="/" 
            className="block px-3 py-2 text-2xl font-medium text-white hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink('home');
              setIsMenuOpen(false);
            }}
          >
            Home
            {activeLink === 'home' && (
              <span className="block w-full h-[2px] mt-1 bg-gradient-to-r from-blue-400 to-purple-400 transform animate-pulse"></span>
            )}
          </Link>
          <Link 
            href="/services" 
            className="block px-3 py-2 text-2xl font-medium text-white hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink('services');
              setIsMenuOpen(false);
            }}
          >
            Services
            {activeLink === 'services' && (
              <span className="block w-full h-[2px] mt-1 bg-gradient-to-r from-blue-400 to-purple-400 transform animate-pulse"></span>
            )}
          </Link>
          <Link 
            href="/portfolio" 
            className="block px-3 py-2 text-2xl font-medium text-white hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink('portfolio');
              setIsMenuOpen(false);
            }}
          >
            Portfolio
            {activeLink === 'portfolio' && (
              <span className="block w-full h-[2px] mt-1 bg-gradient-to-r from-blue-400 to-purple-400 transform animate-pulse"></span>
            )}
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 text-2xl font-medium text-white hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink('about');
              setIsMenuOpen(false);
            }}
          >
            About
            {activeLink === 'about' && (
              <span className="block w-full h-[2px] mt-1 bg-gradient-to-r from-blue-400 to-purple-400 transform animate-pulse"></span>
            )}
          </Link>
          <Link 
            href="/contact" 
            className="mt-6 relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white rounded-full group hover-lift"
            onClick={() => {
              setActiveLink('contact');
              setIsMenuOpen(false);
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative flex items-center gap-2">
              Contact Us
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
