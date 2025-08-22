import type { Metadata } from 'next';
import Link from 'next/link';
import { getProyectos } from '../../../lib/content/loaders';

export const metadata: Metadata = {
  title: 'Nuestros Proyectos',
  description: 'Descubre los proyectos más destacados que hemos realizado, desde estructuras industriales hasta instalaciones arquitectónicas complejas.',
};

export default function ProyectosPage() {
  const proyectos = getProyectos();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Cada proyecto es una oportunidad de demostrar nuestra excelencia en metalurgia. Explore algunos de nuestros trabajos más representativos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <article key={proyecto.slug} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100">
              {/* Project Cover */}
              <div className="relative h-48 bg-secondary-100 rounded-3xl overflow-hidden">
                {proyecto.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-3xl text-xs font-medium z-10">
                    Destacado
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center text-secondary-400 px-4">
                  <span className="text-sm text-center font-medium">{proyecto.title}</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <time className="text-sm text-secondary-500">
                    {new Date(proyecto.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {proyecto.duration && (
                    <span className="text-sm text-secondary-500">
                      {proyecto.duration}
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-bold text-secondary-900 mb-3">
                  {proyecto.title}
                </h2>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {proyecto.excerpt}
                </p>
                
                {/* Tags */}
                {proyecto.tags && proyecto.tags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-block bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {proyecto.tags.length > 3 && (
                        <span className="inline-block bg-secondary-100 text-secondary-600 text-xs px-2 py-1 rounded">
                          +{proyecto.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Client & Location */}
                <div className="text-sm text-secondary-500 mb-4 space-y-1">
                  {proyecto.client && (
                    <div>Cliente: {proyecto.client}</div>
                  )}
                  {proyecto.location && (
                    <div>Ubicación: {proyecto.location}</div>
                  )}
                </div>
                
                <Link 
                  href={`/proyectos/${proyecto.slug}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-3xl hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Ver proyecto
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary-50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-secondary-600 mb-6">
            Nos encantaría conocer tu próximo desafío. Trabajamos junto a nuestros clientes desde la conceptualización hasta la entrega final.
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-3xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}
