import type { Metadata } from 'next';
import Image from 'next/image';
import { getMaquinarias } from '@/lib/content/loaders';

export const metadata: Metadata = {
  title: 'Maquinaria Industrial - Metalls del Camp',
  description: 'Descubre nuestra flota de maquinaria especializada para el tratamiento y gestión de residuos. Tecnología de vanguardia para procesos eficientes.',
};

export default function MaquinariasPage() {
  const allMaquinarias = getMaquinarias();

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

          {/* Máquinas Destacadas - Bloque 2x2 Ovalado Vertical */}
          {allMaquinarias.length > 0 && (
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
                <span className="inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-lg">
                  Maquinaria de Limpieza
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {allMaquinarias.slice(0, 4).map((maquinaria) => (
                  <article 
                    key={maquinaria.slug}
                    className="bg-white rounded-full shadow-xl overflow-hidden border-4 border-primary-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src={maquinaria.image}
                          alt={maquinaria.title}
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/85 rounded-full"></div>
                      </div>
                      
                      {/* Badge superior */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                        <span className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full shadow-lg">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Premium
                        </span>
                      </div>

                      {/* Información central optimizada para formato vertical */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 py-12">
                        <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                          {maquinaria.title}
                        </h3>
                        
                        {maquinaria.desc && (
                          <p className="text-white/90 text-sm mb-6 leading-relaxed max-w-xs">
                            {maquinaria.desc}
                          </p>
                        )}

                        {/* Especificaciones en formato vertical */}
                        {maquinaria.specifications && (
                          <div className="space-y-3 mb-6">
                            {maquinaria.specifications.capacity && (
                              <div className="bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 text-center">
                                <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Capacidad</div>
                                <div className="text-sm font-bold text-gray-900">{maquinaria.specifications.capacity}</div>
                              </div>
                            )}
                            {maquinaria.specifications.power && (
                              <div className="bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 text-center">
                                <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Potencia</div>
                                <div className="text-sm font-bold text-gray-900">{maquinaria.specifications.power}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Footer con categoría */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                        {maquinaria.category && (
                          <div className="text-center">
                            <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                              {maquinaria.category}
                            </span>
                            <div className="flex items-center justify-center space-x-2 mt-2">
                              <span className="text-sm text-white/80">Certificado</span>
                              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Equipamiento Estándar - Bloque 3x3 Ovalado Vertical */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              <span className="inline-block bg-secondary-100 text-secondary-800 px-6 py-3 rounded-lg">
                Contenedores
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMaquinarias.slice(4, 13).map((maquinaria) => (
                <article 
                  key={maquinaria.slug}
                  className="bg-white rounded-full shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200"
                  style={{ aspectRatio: '4/5' }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={maquinaria.image}
                        alt={maquinaria.title}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/75 rounded-full"></div>
                    </div>

                    {/* Contenido central para formato vertical */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 py-8">
                      <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                        {maquinaria.title}
                      </h3>
                      
                      {maquinaria.desc && (
                        <p className="text-white/85 text-xs mb-4 leading-relaxed line-clamp-2 max-w-48">
                          {maquinaria.desc}
                        </p>
                      )}

                      {/* Especificaciones compactas en vertical */}
                      {maquinaria.specifications && (
                        <div className="space-y-2 mb-4">
                          {maquinaria.specifications.capacity && (
                            <div className="bg-white/90 rounded-full py-1 px-3">
                              <span className="text-xs text-gray-600">Cap: </span>
                              <span className="text-xs font-semibold text-gray-900">{maquinaria.specifications.capacity}</span>
                            </div>
                          )}
                          {maquinaria.specifications.power && (
                            <div className="bg-white/90 rounded-full py-1 px-3">
                              <span className="text-xs text-gray-600">Pot: </span>
                              <span className="text-xs font-semibold text-gray-900">{maquinaria.specifications.power}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Categoría en la parte inferior */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      {maquinaria.category && (
                        <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                          {maquinaria.category}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Equipamiento Complementario - Bloque 4x4 Ovalado Vertical Compacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              <span className="inline-block bg-accent-100 text-accent-800 px-6 py-3 rounded-lg">
                Autocompactadoras
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allMaquinarias.slice(13, 29).map((maquinaria) => (
                <article 
                  key={maquinaria.slug}
                  className="bg-white rounded-full shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
                  style={{ aspectRatio: '5/6' }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={maquinaria.image}
                        alt={maquinaria.title}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-full"></div>
                    </div>

                    {/* Contenido minimalista para formato compacto */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                      <h3 className="text-sm font-bold text-white mb-3 leading-tight line-clamp-2">
                        {maquinaria.title}
                      </h3>

                      {maquinaria.specifications?.capacity && (
                        <div className="bg-white/90 rounded-full py-1 px-2 mb-2">
                          <span className="text-xs font-medium text-gray-900">{maquinaria.specifications.capacity}</span>
                        </div>
                      )}
                    </div>

                    {/* Categoría compacta */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                      {maquinaria.category && (
                        <span className="inline-block px-2 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                          {maquinaria.category}
                        </span>
                      )}
                    </div>
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
