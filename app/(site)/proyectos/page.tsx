import type { Metadata } from 'next';
import Link from 'next/link';
import { getProyectos } from '../../../lib/content/loaders';

export const metadata: Metadata = {
  title: 'Nuestros Proyectos',
  description: 'Descubre los proyectos más destacados que hemos realizado, desde plantas de filtros hasta gestión integral de residuos industriales.',
};

export default function ProyectosPage() {
  const proyectos = getProyectos();

  const stats = [
    { label: 'Proyectos Completados', value: '+150' },
    { label: 'Clientes Satisfechos', value: '+10.000' },
    { label: 'Años de Experiencia', value: '+17' },
    { label: 'Instalaciones ', value: '5' },
  ];

  const especialidades = [
    {
      titulo: 'Plantas de Filtros',
      descripcion: 'Sistemas avanzados de filtración para aguas industriales',
      icono: '💧'
    },
    {
      titulo: 'Gestión de Residuos',
      descripcion: 'Soluciones integrales de gestión sostenible',
      icono: '♻️'
    },
    {
      titulo: 'Tramitación Ambiental',
      descripcion: 'Gestión completa de permisos y documentación',
      icono: '📋'
    },
    {
      titulo: 'Tecnología Avanzada',
      descripcion: 'Innovación aplicada a procesos industriales',
      icono: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada proyecto es una oportunidad de demostrar nuestra excelencia en gestión ambiental. Explore algunos de nuestros trabajos más representativos.
            </p>
          </div>

          {/* Cifras en burbujas circulares */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-center px-4 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Especialidades en cápsula horizontal */}
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-3xl px-16 py-12 hover:shadow-4xl transition-all duration-500 transform hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {especialidades.map((especialidad, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-4xl mb-4">{especialidad.icono}</div>
                  <h3 className="text-lg font-bold mb-2">{especialidad.titulo}</h3>
                  <p className="text-sm opacity-90">{especialidad.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros Proyectos
            </h2>
            <p className="text-lg text-gray-600">
              Proyectos innovadores y de mayor impacto ambiental que hemos desarrollado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <article key={proyecto.slug} className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100">
                
                {/* Project Cover */}
                <div className="relative h-56 bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 px-6">
                    <span className="text-lg text-center font-bold">{proyecto.title}</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {proyecto.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {proyecto.excerpt}
                  </p>
                  
                  {/* Tags */}
                  {proyecto.tags && proyecto.tags.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {proyecto.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                        {proyecto.tags.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            +{proyecto.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <Link 
                    href={`/proyectos/${proyecto.slug}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Ver proyecto completo
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
