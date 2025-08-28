'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = '', showText = true }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {/* SVG Logo */}
        <svg 
          className={`h-10 w-10 ${showText ? 'mr-2' : ''}`} 
          viewBox="-10 0 220 220" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Teal Layer */}
          <path 
            d="M25 160L100 205L175 160L100 115L25 160Z" 
            fill="#2A7B7B" 
            stroke="#236868" 
            strokeWidth="3"
          />
          {/* Teal Layer - Right Side */}
          <path 
            d="M175 160L175 170L100 215L100 205L175 160Z" 
            fill="#236868" 
            stroke="#236868" 
            strokeWidth="2"
          />
          {/* Teal Layer - Left Side */}
          <path 
            d="M25 160L25 170L100 215L100 205L25 160Z" 
            fill="#1E5555" 
            stroke="#1E5555" 
            strokeWidth="2"
          />
          
          {/* Yellow Layer */}
          <path 
            d="M25 120L100 165L175 120L100 75L25 120Z" 
            fill="#F8E9A1" 
            stroke="#E6D68E" 
            strokeWidth="3"
          />
          {/* Yellow Layer - Right Side */}
          <path 
            d="M175 120L175 130L100 175L100 165L175 120Z" 
            fill="#E6D68E" 
            stroke="#E6D68E" 
            strokeWidth="2"
          />
          {/* Yellow Layer - Left Side */}
          <path 
            d="M25 120L25 130L100 175L100 165L25 120Z" 
            fill="#D6C67E" 
            stroke="#D6C67E" 
            strokeWidth="2"
          />
          
          {/* Orange Layer */}
          <path 
            d="M25 80L100 125L175 80L100 35L25 80Z" 
            fill="#F9A826" 
            stroke="#E89A22" 
            strokeWidth="3"
          />
          {/* Orange Layer - Right Side */}
          <path 
            d="M175 80L175 90L100 135L100 125L175 80Z" 
            fill="#E89A22" 
            stroke="#E89A22" 
            strokeWidth="2"
          />
          {/* Orange Layer - Left Side */}
          <path 
            d="M25 80L25 90L100 135L100 125L25 80Z" 
            fill="#D88A1F" 
            stroke="#D88A1F" 
            strokeWidth="2"
          />
          
          {/* Red Layer */}
          <path 
            d="M25 40L100 85L175 40L100 5L25 40Z" 
            fill="#C73E1D" 
            stroke="#B53A1A" 
            strokeWidth="3"
          />
          {/* Red Layer - Right Side */}
          <path 
            d="M175 40L175 50L100 95L100 85L175 40Z" 
            fill="#B53A1A" 
            stroke="#B53A1A" 
            strokeWidth="2"
          />
          {/* Red Layer - Left Side */}
          <path 
            d="M25 40L25 50L100 95L100 85L25 40Z" 
            fill="#A53617" 
            stroke="#A53617" 
            strokeWidth="2"
          />
        </svg>
        
        {/* Company Name - conditionally rendered */}
        {showText && (
          <span className="text-2xl font-bold text-white">
            ClearStack
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
