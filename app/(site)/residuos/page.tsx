import { Metadata } from 'next';
import ResiduosClientPage from './ResiduosClientPage';

export const metadata: Metadata = {
  title: 'Gestión de Residuos Industriales | Metalls del Camp',
  description: 'Servicios especializados en recogida, clasificación y tratamiento de residuos peligrosos y no peligrosos. Cumplimiento legal garantizado.',
  keywords: ['gestión residuos', 'residuos industriales', 'residuos peligrosos', 'reciclaje', 'tratamiento residuos', 'aceites usados', 'chatarra', 'medioambiente'],
  openGraph: {
    title: 'Gestión de Residuos Industriales | Metalls del Camp',
    description: 'Servicios especializados en recogida, clasificación y tratamiento de residuos peligrosos y no peligrosos.',
    images: ['/brand/logo-metalls-del-camp.png'],
  },
};

export default function ResiduosPage() {
  return <ResiduosClientPage />;
}

