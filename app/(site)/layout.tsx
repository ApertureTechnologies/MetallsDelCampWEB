import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    template: '%s | Metalls del Camp',
    default: 'Metalls del Camp - Gestión profesional de residuos',
  },
  description: 'Gestión profesional de residuos en la Comunidad Valenciana y Castilla-La Mancha. Soluciones sostenibles para la economía circular.',
};

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
