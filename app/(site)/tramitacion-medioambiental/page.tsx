import { Metadata } from 'next';
import gestionDocumentacionData from '@/content/gestion-documentacion.page';

export const metadata: Metadata = {
  title: 'Tramitación Medioambiental',
  description: 'Servicio especializado en tramitación medioambiental para talleres de automoción. Cumplimiento de Ley 7/2022 y normativa autonómica.',
  keywords: ['tramitación medioambiental', 'documentación', 'talleres automoción', 'Ley 7/2022', 'NIMA', 'residuos peligrosos', 'cumplimiento normativo'],
};

export default function TramitacionMedioambientalPage() {
  const { intro, bloques } = gestionDocumentacionData;

  return (
    <div className="min-h-screen">
      {/* Hero Section - Destacado en lila y amarillo */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-800 text-white py-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-tertiary-400/30 px-6 py-2 rounded-full mb-6 border-2 border-tertiary-400">
              <span className="text-tertiary-100 font-semibold">⚡ Servicio Especializado</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Olvídate del papeleo ambiental
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-accent-100">
              Gestionamos por ti toda la documentación legal y administrativa para que tu empresa cumpla con la normativa vigente.
            </p>
            <div className="w-24 h-1 bg-tertiary-400 mx-auto rounded-full"></div>
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

      {/* Bloques de Servicios - Con temática lila y amarilla */}
      <section className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header con video a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Textos a la izquierda (2/3) */}
            <div className="lg:col-span-2 text-left">
              <h2 className="text-3xl font-bold text-accent-800 mb-4">Nuestros Servicios Especializados</h2>
              <p className="text-lg text-gray-600 mb-4">
                Ofrecemos un servicio integral de tramitación medioambiental diseñado específicamente para talleres de automoción.
              </p>
              <div className="w-20 h-1 bg-tertiary-500 rounded-full"></div>
            </div>
            
            {/* Video píldora a la derecha (1/3) */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Video Explicativo</h3>
                <p className="text-sm opacity-90 mb-4">Descubre nuestro proceso de tramitación</p>
                <button className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  Ver Video
                </button>
              </div>
            </div>
          </div>

          {/* Grid de burbujas mejoradas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bloques.map((bloque, index) => (
              <div key={index} className="bg-white rounded-[4rem] px-6 py-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-accent-400 hover:border-tertiary-500 min-h-[400px] flex flex-col">
                <h3 className="text-lg font-bold text-accent-800 mb-6 text-center leading-tight">
                  {bloque.titulo}
                </h3>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {bloque.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-tertiary-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Lila y amarillo destacado */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            ¿Necesitas ayuda con la tramitación medioambiental de tu taller?
          </h2>
          <p className="text-xl mb-8 text-accent-100">
            Contacta con nuestros expertos y garantiza el cumplimiento de toda la normativa aplicable
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-tertiary-400 text-accent-800 font-bold py-4 px-8 rounded-lg hover:bg-tertiary-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
