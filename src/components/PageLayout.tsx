'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
