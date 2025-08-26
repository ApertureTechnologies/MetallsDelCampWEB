'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getInstalaciones } from '@/lib/content/loaders';
import YouTubeModal from '@/components/YouTubeModal';

export default function InstallationsGrid() {
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

        {/* Burgos - Destacado en el centro - Píldora más baja */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {instalaciones.slice(0, 1).map((instalacion) => (
              <article 
                key={instalacion.slug}
                className="bg-white rounded-full shadow-3xl overflow-hidden border-4 border-purple-400 hover:shadow-4xl transition-all duration-500 transform hover:scale-105"
                aria-labelledby={`instalacion-${instalacion.slug}-title`}
              >
                <div className="px-16 py-6 text-center">
                  <div className="flex items-center justify-center space-x-12">
                    {/* Badge de próximamente */}
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                      Próximamente
                    </span>

                    {/* Título principal - Burgos */}
                    <h3 id={`instalacion-${instalacion.slug}-title`} className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {instalacion.title}
                    </h3>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {instalaciones.slice(1).map((instalacion) => (
            <article 
              key={instalacion.slug} 
              className="bg-white rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              aria-labelledby={`instalacion-${instalacion.slug}-title`}
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
              <div className="relative h-48 bg-gray-200">
                {instalacion.videoId ? (
                  <>
                    <Image
                      src={getYouTubeThumbnail(instalacion.videoId)}
                      alt={`Video de instalación ${instalacion.title}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <h3 id={`instalacion-${instalacion.slug}-title`} className="text-lg font-bold text-white">
                        {instalacion.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-primary-600 hover:text-primary-700 bg-white border border-primary-300 hover:border-primary-400 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
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
      
      {/* Modal de YouTube */}
      <YouTubeModal 
        isOpen={modalOpen}
        onClose={closeModal}
        videoId={currentVideo.id}
        title={currentVideo.title}
      />
    </section>
  );
}
