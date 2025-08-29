import type { Metadata } from 'next';
import { inter, poppins, jetbrainsMono } from '@/lib/fonts';
import brandConfig from '../brand.config';
import '../styles/theme.css';

export const metadata: Metadata = {
  title: brandConfig.seo.defaultTitle,
  description: brandConfig.seo.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://metallsdelcamp.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: brandConfig.seo.openGraph.siteName,
    images: [
      {
        url: '/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metalls del Camp - Excellence in Metalwork',
      },
    ],
  },
  twitter: brandConfig.seo.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
