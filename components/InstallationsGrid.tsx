import Image from 'next/image';
import { getInstalaciones } from '@/lib/content/loaders';

export default function InstallationsGrid() {
  const instalaciones = getInstalaciones();

  return (
    <section className="py-16 bg-gray-50" id="instalaciones" aria-labelledby="instalaciones-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="instalaciones-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con centros estratégicamente ubicados para dar el mejor servicio a toda la Comunidad Valenciana y Castilla-La Mancha
          </p>
        </div>

        {/* Burgos - Destacado en el centro */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {instalaciones.slice(0, 1).map((instalacion) => (
              <article 
                key={instalacion.slug}
                className="bg-white rounded-full shadow-3xl overflow-hidden border-4 border-primary-100 hover:shadow-4xl transition-all duration-500 transform hover:scale-105"
                aria-labelledby={`instalacion-${instalacion.slug}-title`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Imagen */}
                  <div className="relative h-64 lg:h-80 rounded-l-full overflow-hidden">
                    <Image
                      src={instalacion.image}
                      alt={`Instalación de ${instalacion.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-4">
                        Proximamente
                      </span>
                      <h3 id={`instalacion-${instalacion.slug}-title`} className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {instalacion.title}
                      </h3>
                      <div className="w-12 h-1 bg-primary-600 rounded-full mb-4"></div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {instalacion.desc}
                    </p>

                    {/* Stats compactos */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary-600">18,000</div>
                        <div className="text-sm text-gray-600">m² superficie</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary-600">25,000</div>
                        <div className="text-sm text-gray-600">t/año capacidad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Otras instalaciones - Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {instalaciones.slice(1).map((instalacion) => (
            <article 
              key={instalacion.slug} 
              className="bg-white rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              aria-labelledby={`instalacion-${instalacion.slug}-title`}
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={instalacion.image}
                  alt={`Instalación de ${instalacion.title}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <h3 id={`instalacion-${instalacion.slug}-title`} className="text-lg font-bold text-white">
                    {instalacion.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {instalacion.desc}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg 
                    className="w-4 h-4 mr-2 text-primary-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Ubicación: </span>
                  Centro operativo
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/instalaciones"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-primary-600 hover:text-primary-700 bg-white border border-primary-300 hover:border-primary-400 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Ver más información sobre todas nuestras instalaciones"
          >
            Ver todas las instalaciones
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
