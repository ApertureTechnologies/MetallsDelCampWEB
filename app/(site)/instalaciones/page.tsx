'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getInstalaciones } from '@/lib/content/loaders';
import YouTubeModal from '@/components/YouTubeModal';

export default function InstalacionesPage() {
  const instalaciones = getInstalaciones();
  
  // Estados para el modal de YouTube
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ id: '', title: '' });

  const openVideoModal = (videoId: string, title: string) => {
    setCurrentVideo({ id: videoId, title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo({ id: '', title: '' });
  };

  // Función para obtener la URL de la thumbnail de YouTube
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-instalaciones.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestras Instalaciones
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Centros estratégicamente ubicados para dar el mejor servicio en toda nuestra área de cobertura
            </p>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Burgos - Destacado en la parte superior - Píldora más baja */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              {instalaciones.slice(0, 1).map((instalacion) => (
                <article 
                  key={instalacion.slug}
                  className="bg-white rounded-full shadow-3xl overflow-hidden border-4 border-purple-400 hover:shadow-4xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="px-16 py-8 text-center">
                    <div className="flex items-center justify-center space-x-12">
                      {/* Badge de próximamente */}
                      <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                        Próximamente
                      </span>

                      {/* Título principal - Burgos */}
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {instalacion.title}
                      </h2>

                      {/* Badge de nueva instalación */}
                      <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-lg text-sm">
                        🏗️ Nueva Instalación
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Otras instalaciones - Grid 2x2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Red de Instalaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instalaciones.slice(1).map((instalacion) => (
                <article 
                  key={instalacion.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => instalacion.videoId && openVideoModal(instalacion.videoId, `${instalacion.title} - Video Instalaciones`)}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && instalacion.videoId) {
                      e.preventDefault();
                      openVideoModal(instalacion.videoId, `${instalacion.title} - Video Instalaciones`);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver video de ${instalacion.title}`}
                >
                  {/* Video thumbnail o imagen */}
                  <div className="relative h-64">
                    {instalacion.videoId ? (
                      <>
                        <Image
                          src={getYouTubeThumbnail(instalacion.videoId)}
                          alt={`Video de instalación ${instalacion.title}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-2xl font-bold text-white">
                            {instalacion.title}
                          </h3>
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src={instalacion.image}
                          alt={`Instalación ${instalacion.title}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-2xl font-bold text-white">
                            {instalacion.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {instalacion.desc}
                    </p>

                    {/* Autorizaciones Medioambientales (si existen) */}
                    {instalacion.environmentalAuthorizations && instalacion.environmentalAuthorizations.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Autorizaciones Medioambientales:</h4>
                        <div className="space-y-2">
                          {instalacion.environmentalAuthorizations.map((autorizacion, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs text-gray-600 leading-relaxed">{autorizacion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Características */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Servicios destacados:</h4>
                      <div className="space-y-2">
                        {[
                          'Gestión integral de residuos',
                          'Logística especializada',
                          'Personal cualificado',
                          'Equipamiento avanzado'
                        ].map((servicio, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">{servicio}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats pequeños */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Superficie:</span>
                          <span className="text-gray-600 ml-1">
                            {instalacion.title.includes('Romeral') ? '25,000 m²' : 
                             instalacion.title.includes('Aldaia') ? '20,000 m²' : 
                             instalacion.title.includes('Coscollar') ? '18,500 m²' : '15,000 m²'}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Capacidad:</span>
                          <span className="text-gray-600 ml-1">
                            {instalacion.title.includes('Romeral') ? '70,000 t/año' : 
                             instalacion.title.includes('Aldaia') ? '55,000 t/año' : 
                             instalacion.title.includes('Coscollar') ? '45,000 t/año' : '25,000 t/año'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional de cobertura */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cobertura Regional Completa
            </h2>
            <p className="text-xl text-gray-600">
              Nuestras instalaciones están estratégicamente ubicadas para ofrecer un servicio integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-light-to-br rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comunidad Valenciana</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Valencia y área metropolitana</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Instalaciones en Aldaia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Cobertura provincial completa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Servicios de recogida y transporte</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-dark-to-br rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Castilla-La Mancha</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Toledo y provincia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Centro de El Romeral</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Red de distribución regional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Logística optimizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-dark-to-br text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Quieres visitar nuestras instalaciones?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Programa una visita y conoce de primera mano nuestros procesos de gestión de residuos.
          </p>
          
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Solicitar Visita
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* Modal de YouTube */}
      <YouTubeModal 
        isOpen={modalOpen}
        onClose={closeModal}
        videoId={currentVideo.id}
        title={currentVideo.title}
      />
    </div>
  );
}
