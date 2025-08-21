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
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
