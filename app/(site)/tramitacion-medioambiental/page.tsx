import { Metadata } from 'next';
import gestionDocumentacionData from '@/content/gestion-documentacion.page';

export const metadata: Metadata = {
  title: 'Tramitación Medioambiental',
  description: 'Servicio especializado en tramitación medioambiental para talleres de automoción. Cumplimiento de Ley 7/2022 y normativa autonómica.',
  keywords: ['tramitación medioambiental', 'documentación', 'talleres automoción', 'Ley 7/2022', 'NIMA', 'residuos peligrosos', 'cumplimiento normativo'],
};

export default function TramitacionMedioambientalPage() {
  const { title, subtitle, intro, bloques } = gestionDocumentacionData;

  return (
    <div className="min-h-screen">
      {/* Hero Section - Destacado en verde */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-500/20 px-6 py-2 rounded-full mb-6">
              <span className="text-green-100 font-semibold">🌱 Servicio Especializado</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-green-100">
              {subtitle}
            </p>
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {intro.map((parrafo, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed border-l-4 border-green-500 pl-6">
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Bloques de Servicios - Con temática verde */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Nuestros Servicios Especializados</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bloques.map((bloque, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {bloque.titulo}
                </h3>
                <ul className="space-y-3">
                  {bloque.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* CTA Section - Verde destacado */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            ¿Necesitas ayuda con la tramitación medioambiental de tu taller?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contacta con nuestros expertos y garantiza el cumplimiento de toda la normativa aplicable
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
