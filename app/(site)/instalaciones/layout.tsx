import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalaciones - Metalls del Camp',
  description: 'Nuestras instalaciones estratégicamente ubicadas en Valencia y Toledo para dar el mejor servicio en gestión de residuos metálicos.',
};

export default function InstalacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
