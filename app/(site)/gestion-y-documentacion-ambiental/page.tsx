import { Metadata } from 'next';
import gestionDocumentacionData from '@/content/gestion-documentacion.page';

export const metadata: Metadata = {
  title: 'Gestión y Documentación Medioambiental',
  description: 'Servicio especializado en gestión y documentación medioambiental para talleres de automoción. Cumplimiento de Ley 7/2022 y normativa autonómica.',
  keywords: ['gestión medioambiental', 'documentación', 'talleres automoción', 'Ley 7/2022', 'NIMA', 'residuos peligrosos', 'cumplimiento normativo'],
};

export default function GestionDocumentacionPage() {
  const { title, subtitle, intro, bloques } = gestionDocumentacionData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {intro.map((parrafo, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Bloques de Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bloques.map((bloque, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {bloque.titulo}
                </h3>
                <ul className="space-y-3">
                  {bloque.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas ayuda con la gestión medioambiental de tu taller?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nuestros expertos y garantiza el cumplimiento de toda la normativa aplicable
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-white text-secondary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
