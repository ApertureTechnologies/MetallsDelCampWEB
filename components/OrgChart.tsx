'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getEquipo } from '@/lib/content/loaders';
import YouTubeModal from '@/components/YouTubeModal';

export default function OrgChart() {
  const equipo = getEquipo();
  const { ceo, directiva, gerencias } = equipo;
  
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

  // Componente circular como en la imagen
  const CircularPersonCard = ({ 
    persona, 
    variant = 'default',
    videoId = null,
    isCEO = false
  }: { 
    persona: { id: string; nombre: string; puesto: string; foto?: string };
    variant?: 'default' | 'department' | 'team' | 'commercial';
    videoId?: string | null;
    isCEO?: boolean;
  }) => {
    const getBorderColor = () => {
      switch (variant) {
        case 'department':
          return 'border-green-500';
        case 'team':
          return 'border-orange-500';
        case 'commercial':
          return 'border-yellow-500';
        default:
          return 'border-purple-600';
      }
    };

    const handleVideoClick = () => {
      if (videoId) {
        openVideoModal(videoId, `${persona.nombre} - ${persona.puesto}`);
      }
    };

    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Círculo principal */}
          <div className={`w-24 h-24 rounded-full border-4 ${getBorderColor()} bg-white flex items-center justify-center relative overflow-hidden`}>
            {isCEO ? (
              <span className="text-gray-600 font-bold text-sm">CEO</span>
            ) : (
              <Image
                src={persona.foto || '/brand/team/placeholder.jpg'}
                alt={`${persona.nombre}, ${persona.puesto}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            )}
          </div>
          
          {/* Botón de video */}
          {videoId && !isCEO && (
            <button
              onClick={handleVideoClick}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-10 cursor-pointer"
              title="Ver video presentación"
            >
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
        </div>
        
        {/* Texto debajo */}
        <div className="mt-3 text-center max-w-[120px]">
          <h4 className="font-bold text-sm text-gray-900 leading-tight">
            {persona.nombre}
          </h4>
          <p className="text-xs text-gray-600 mt-1 leading-tight">
            {persona.puesto}
          </p>
        </div>
      </div>
    );
  };


  const VerticalArrow = ({ height = 'h-8' }: { height?: string }) => (
    <div className="flex flex-col items-center my-4">
      <div className={`w-0.5 ${height} bg-gray-800`}></div>
      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800"></div>
    </div>
  );

  return (
    <section className="py-16 bg-white" id="equipo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organigrama
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estructura organizacional de Metalls del Camp
          </p>
        </div>

        <div className="flex flex-col items-center max-w-7xl mx-auto">
          
          {/* NIVEL 1: DIRECTOR RICARD (CEO ANÓNIMO) */}
          {ceo && (
            <div className="mb-8">
              <CircularPersonCard 
                persona={ceo} 
                isCEO={true}
              />
            </div>
          )}
          
          {/* Flecha vertical hacia Belén */}
          <VerticalArrow height="h-8" />

          {/* NIVEL 2: SOLO BELÉN */}
          <div className="flex justify-center mb-8">
            {directiva?.[0] && (
              <CircularPersonCard 
                persona={directiva[0]} 
                videoId="dQw4w9WgXcQ"
              />
            )}
          </div>

          {/* Flecha vertical hacia nivel 3 */}
          <VerticalArrow height="h-8" />

          {/* NIVEL 3: IGNACIO (ELEVADO) Y GERENTES */}
          <div className="flex items-end gap-16 mb-8">
            {gerencias?.aldaia?.gerente && (
              <CircularPersonCard 
                persona={gerencias.aldaia.gerente} 
                variant="department"
                videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {directiva?.[2] && (
              <CircularPersonCard 
                persona={directiva[2]}
                variant="commercial"
                videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {gerencias?.elRomeral?.gerente && (
              <CircularPersonCard 
                persona={gerencias.elRomeral.gerente} 
                variant="team"
                videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {/* IGNACIO ELEVADO CON MARGIN BOTTOM */}
            {directiva?.[1] && (
              <div className="mb-8">
                <CircularPersonCard 
                  persona={directiva[1]}
                  variant="default"
                  videoId="dQw4w9WgXcQ"
                />
              </div>
            )}
          </div>

          <div className="flex items-start gap-20 w-full max-w-6xl mt-12">
            
            {/* DELEGACIÓN LEVANTE */}
            <div className="flex flex-col items-center flex-1">
              <h3 className="text-lg font-bold text-green-700 mb-6 bg-green-100 px-4 py-2 rounded-lg">
                Delegación Levante
              </h3>
              
              {/* Daniel y Josep juntos */}
              <div className="flex gap-8 mb-4">
                {gerencias?.aldaia?.jefeAdministrativo && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.jefeAdministrativo} 
                    variant="department"
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.aldaia?.equipos?.coscollar?.planificador && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.equipos.coscollar.planificador} 
                    variant="department"
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
              </div>

              <VerticalArrow height="h-6" />

              {/* Los 3 trabajadores en paralelo - ALINEACIÓN PERFECTA */}
              <div className="flex gap-6 items-start">
                {gerencias?.aldaia?.equipos?.coscollar?.jefeTrafico && (
                  <div className="w-32 flex justify-center">
                    <CircularPersonCard 
                      persona={gerencias.aldaia.equipos.coscollar.jefeTrafico} 
                      variant="department"
                      videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                  </div>
                )}
                {gerencias?.aldaia?.equipos?.coscollar?.responsable && (
                  <div className="w-32 flex justify-center">
                    <CircularPersonCard 
                      persona={gerencias.aldaia.equipos.coscollar.responsable} 
                      variant="department"
                      videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                  </div>
                )}
                {gerencias?.aldaia?.equipos?.serraEspada?.descarga && (
                  <div className="w-32 flex justify-center">
                    <CircularPersonCard 
                      persona={{
                        ...gerencias.aldaia.equipos.serraEspada.descarga,
                        puesto: "Descarga de Aceite y Recepción Residuos"
                      }} 
                      variant="department"
                      videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* DELEGACIÓN CENTRAL */}
            <div className="flex flex-col items-center flex-1">
              <h3 className="text-lg font-bold text-orange-700 mb-6 bg-orange-100 px-4 py-2 rounded-lg">
                Delegación Central
              </h3>
              
              {/* Mario y María Concepción juntos */}
              <div className="flex gap-8 mb-4">
                {gerencias?.elRomeral?.coordinacion && (
                  <CircularPersonCard 
                    persona={gerencias.elRomeral.coordinacion} 
                    variant="team"
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                <CircularPersonCard 
                  persona={{
                    id: "jefa-administracion-central",
                    nombre: "María Concepción Fernández",
                    puesto: "Jefa de Administración"
                  }}
                  variant="team"
                  videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>

              <VerticalArrow height="h-6" />

              {/* Jefes de Planta */}
              <div className="grid grid-cols-2 gap-6">
                {gerencias?.elRomeral?.equipos?.plantaResiduos?.responsable && (
                  <CircularPersonCard 
                    persona={gerencias.elRomeral.equipos.plantaResiduos.responsable} 
                    variant="team"
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.elRomeral?.equipos?.plantaFiltros?.responsable && (
                  <CircularPersonCard 
                    persona={gerencias.elRomeral.equipos.plantaFiltros.responsable} 
                    variant="team"
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
              </div>
            </div>
          </div>
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
