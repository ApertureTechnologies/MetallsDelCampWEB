import type { Metadata } from 'next';
import Image from 'next/image';
import { getMaquinarias } from '@/lib/content/loaders';

export const metadata: Metadata = {
  title: 'Maquinaria Industrial - Metalls del Camp',
  description: 'Descubre nuestra flota de maquinaria especializada para el tratamiento y gestión de residuos metálicos. Tecnología de vanguardia para procesos eficientes.',
};

export default function MaquinariasPage() {
  const allMaquinarias = getMaquinarias();
  const featuredMaquinarias = allMaquinarias.filter(m => m.featured);
  const regularMaquinarias = allMaquinarias.filter(m => !m.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Solo título y descripción */}
      <section className="bg-gradient-to-br from-secondary-500 to-primary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maquinaria Industrial
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Tecnología de vanguardia para el tratamiento eficiente de residuos metálicos
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-white text-opacity-90 leading-relaxed">
                Contamos con equipamiento especializado de última generación para garantizar 
                procesos eficientes y sostenibles en la gestión integral de residuos metálicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Equipamiento */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipamiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con maquinaria especializada para cada tipo de proceso de gestión de residuos
            </p>
          </div>

          {/* Máquinas Destacadas - Destacadas especialmente */}
          {featuredMaquinarias.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Equipamiento Destacado
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredMaquinarias.map((maquinaria) => (
                  <article 
                    key={maquinaria.slug}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      <div className="relative w-full h-64">
                        <Image
                          src={maquinaria.image}
                          alt={maquinaria.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                          Destacado
                        </span>
                      </div>
                      {maquinaria.price && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                            {maquinaria.price}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {maquinaria.title}
                      </h3>
                      <div className="w-16 h-1 bg-primary-500 rounded-full mb-4"></div>
                      
                      {maquinaria.desc && (
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {maquinaria.desc}
                        </p>
                      )}

                      {maquinaria.specifications && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {maquinaria.specifications.capacity && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="font-semibold text-gray-900 block text-sm">Capacidad</span>
                              <span className="text-primary-600 font-medium">{maquinaria.specifications.capacity}</span>
                            </div>
                          )}
                          {maquinaria.specifications.power && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="font-semibold text-gray-900 block text-sm">Potencia</span>
                              <span className="text-primary-600 font-medium">{maquinaria.specifications.power}</span>
                            </div>
                          )}
                          {maquinaria.specifications.dimensions && (
                            <div className="bg-gray-50 rounded-lg p-3 sm:col-span-2">
                              <span className="font-semibold text-gray-900 block text-sm">Dimensiones</span>
                              <span className="text-primary-600 font-medium">{maquinaria.specifications.dimensions}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Equipamiento Premium</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Resto de Maquinarias */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Equipamiento Adicional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularMaquinarias.map((maquinaria) => (
                <article 
                  key={maquinaria.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={maquinaria.image}
                      alt={maquinaria.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {maquinaria.title}
                      </h3>
                      {maquinaria.price && (
                        <span className="text-lg font-semibold text-primary-600">
                          {maquinaria.price}
                        </span>
                      )}
                    </div>
                    
                    {maquinaria.desc && (
                      <p className="text-gray-600 mb-4">
                        {maquinaria.desc}
                      </p>
                    )}

                    {maquinaria.specifications && (
                      <div className="space-y-2">
                        {maquinaria.specifications.capacity && (
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-700">Capacidad:</span>
                            <span className="text-gray-600">{maquinaria.specifications.capacity}</span>
                          </div>
                        )}
                        {maquinaria.specifications.power && (
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-700">Potencia:</span>
                            <span className="text-gray-600">{maquinaria.specifications.power}</span>
                          </div>
                        )}
                        {maquinaria.specifications.dimensions && (
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-700">Dimensiones:</span>
                            <span className="text-gray-600">{maquinaria.specifications.dimensions}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {maquinaria.category && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                          {maquinaria.category}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
