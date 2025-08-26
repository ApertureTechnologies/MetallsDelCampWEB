import type { Metadata } from 'next';
import brandConfig from '../../../brand.config';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${brandConfig.company.name}. Estaremos encantados de ayudarte con tu próximo proyecto de metalurgia.`,
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
