import type { Metadata } from 'next';
import { getSiteContent } from '../../../../lib/content/loaders';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Metalls del Camp',
  description: 'Información sobre el tratamiento de datos personales en Metalls del Camp',
};

export default function PrivacidadPage() {
  const siteContent = getSiteContent();
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary-900 mb-8">
            Política de Privacidad
          </h1>
          
          <div className="space-y-6 text-secondary-600 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: siteContent.legales.privacidad }} />
          </div>
        </div>
      </div>
    </div>
  );
}