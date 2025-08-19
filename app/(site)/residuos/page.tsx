import { Metadata } from 'next';
import residuosData from '@/content/residuos.page';

export const metadata: Metadata = {
  title: 'Gestión de Residuos - Talleres de Automoción',
  description: 'Especialistas en gestión de residuos peligrosos para talleres de automoción. Mejores precios del mercado en aceite, chatarra y baterías. Planta propia de filtros.',
  keywords: ['gestión residuos', 'talleres automoción', 'aceite usado', 'chatarra', 'baterías', 'filtros', 'residuos peligrosos'],
};

export default function ResiduosPage() {
  const { title, especializado, intro, flota, envases, facilitamos } = residuosData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              {especializado}
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

      {/* Nuestros Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Flota */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contamos con:
              </h3>
              <ul className="space-y-3">
                {flota.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Envases */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trabajamos con:
              </h3>
              <ul className="space-y-3">
                {envases.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilitamos */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Facilitamos:
              </h3>
              <ul className="space-y-3">
                {facilitamos.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-tertiary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}