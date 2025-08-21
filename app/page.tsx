import { Metadata } from 'next';
import { Suspense } from 'react';
import { getSiteContent } from '@/lib/content/loaders';
import HeroVideo from '@/components/HeroVideo';
import InstallationsGrid from '@/components/InstallationsGrid';
import OrgChart from '@/components/OrgChart';
import CEOMessage from '@/components/CEOMessage';
import Philosophy from '@/components/Philosophy';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Inicio - Metalls del Camp',
  description: 'Gestión profesional de residuos en la Comunidad Valenciana y Castilla-La Mancha. Metalls del Camp, tu socio en economía circular.',
};

export default function HomePage() {
  const siteContent = getSiteContent();
  
  // Si homeVariant es "basic", mostrar versión simplificada
  if (siteContent.homeVariant === "basic") {
    return (
      <>
        <Header />
        <main id="main-content" className="min-h-screen">
          <Suspense fallback={<div className="h-screen bg-gray-900 animate-pulse" />}>
            <HeroVideo />
          </Suspense>
          {/* Versión básica - solo hero y CTAs principales */}
        </main>
        <Footer />
      </>
    );
  }

  // Versión completa "detailed"
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Suspense fallback={<div className="h-screen bg-gray-900 animate-pulse" />}>
          <HeroVideo />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <InstallationsGrid />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <OrgChart />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gradient-to-br from-primary-50 to-secondary-50 animate-pulse" />}>
          <CEOMessage />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Philosophy />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
