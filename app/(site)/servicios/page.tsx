import type { Metadata } from 'next';
import Link from 'next/link';
import { getServicios } from '../../../lib/content/loaders';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Descubre nuestra amplia gama de servicios especializados en metalurgia, estructuras metálicas, soldadura y carpintería metálica.',
};

export default function ServiciosPage() {
  const servicios = getServicios();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en metalurgia con la más alta calidad y los mejores estándares del sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <article key={servicio.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Service Image Placeholder */}
              <div className="h-48 bg-secondary-100 relative">
                {servicio.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destacado
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center text-secondary-400">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-3">
                  {servicio.title}
                </h2>
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {servicio.excerpt}
                </p>
                
                {/* LER Codes if available */}
                {servicio.lerCodes && servicio.lerCodes.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {servicio.lerCodes.map((code) => (
                        <span key={code} className="inline-block bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded">
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link 
                  href={`/servicios/${servicio.slug}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Ver detalles
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-secondary-600 mb-6">
            Contacta con nosotros para discutir tu proyecto específico. Ofrecemos soluciones a medida para cada cliente.
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
