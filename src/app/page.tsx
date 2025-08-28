'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Services />
      <CTA />
    </PageLayout>
  );
}
