import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getSiteContent } from '@/lib/content/loaders';
import HeroVideo from '@/components/HeroVideo';
import InstallationsGrid from '@/components/InstallationsGrid';
import OrgChart from '@/components/OrgChart';
import OrgSummary from '@/components/OrgSummary';
import CEOMessage from '@/components/CEOMessage';
import Philosophy from '@/components/Philosophy';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Gestión profesional de residuos metálicos en la Comunidad Valenciana y Castilla-La Mancha. Metalls del Camp, tu socio en economía circular.',
};

export default function HomePage() {
  const siteContent = getSiteContent();
  
  // Si homeVariant es "basic", mostrar versión simplificada
  if (siteContent.homeVariant === "basic") {
    return (
      <div id="main-content">
        <Suspense fallback={<div className="h-screen bg-gray-900 animate-pulse" />}>
          <HeroVideo />
        </Suspense>
        {/* Versión básica - solo hero y CTAs principales */}
      </div>
    );
  }

  // Versión completa "detailed"
  return (
    <div id="main-content">
      <Suspense fallback={<div className="h-screen bg-gray-900 animate-pulse" />}>
        <HeroVideo />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <InstallationsGrid />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <OrgChart />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <OrgSummary />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gradient-to-br from-primary-50 to-secondary-50 animate-pulse" />}>
        <CEOMessage />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Philosophy />
      </Suspense>
    </div>
  );
}
