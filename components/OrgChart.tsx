'use client';

import Image from 'next/image';
import { getEquipo } from '@/lib/content/loaders';

export default function OrgChart() {
  const equipo = getEquipo();
  const { ceo, directiva, gerencias } = equipo;

  // Función para obtener una persona específica de la directiva
  const getDirectivoByRole = (role: string) => {
    return directiva?.find(person => person.puesto.includes(role));
  };

  // Componente circular como en la imagen
  const CircularPersonCard = ({ 
    persona, 
    variant = 'default',
    videoUrl = null,
    isCEO = false
  }: { 
    persona: { id: string; nombre: string; puesto: string; foto?: string };
    variant?: 'default' | 'department' | 'team' | 'commercial';
    videoUrl?: string | null;
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
          return 'border-red-500';
      }
    };

    const handleVideoClick = () => {
      if (videoUrl) {
        window.open(videoUrl, '_blank');
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
          {videoUrl && !isCEO && (
            <button
              onClick={handleVideoClick}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-10"
              title="Ver video presentación"
            >
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
        </div>
        
        {/* Texto debajo */}
        <div className="mt-3 text-center">
          <h4 className="font-bold text-sm text-gray-900">
            {persona.nombre}
          </h4>
          <p className="text-xs text-gray-600 mt-1">
            {persona.puesto}
          </p>
        </div>
      </div>
    );
  };

  const VerticalConnection = ({ height = 'h-8' }: { height?: string }) => (
    <div className="flex justify-center my-4">
      <div className={`w-0.5 ${height} bg-gray-800`}></div>
    </div>
  );

  const VerticalArrow = ({ height = 'h-8' }: { height?: string }) => (
    <div className="flex flex-col items-center my-4">
      <div className={`w-0.5 ${height} bg-gray-800`}></div>
      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800"></div>
    </div>
  );

  const TeeConnectionHorizontal = ({ width = 'w-64' }: { width?: string }) => (
    <div className="flex justify-center my-6">
      <div className="relative">
        <div className="w-0.5 h-8 bg-gray-800"></div>
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 h-0.5 ${width} bg-gray-800`}></div>
      </div>
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

          <VerticalConnection />

          {/* NIVEL 2: BELÉN E IGNACIO (MISMO NIVEL) */}
          <div className="flex items-center gap-20 mb-8">
            {getDirectivoByRole('Directora Ejecutiva Global') && (
              <CircularPersonCard 
                persona={getDirectivoByRole('Directora Ejecutiva Global')!} 
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {getDirectivoByRole('Ayudante de Dirección') && (
              <CircularPersonCard 
                persona={getDirectivoByRole('Ayudante de Dirección')!}
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
          </div>

          <TeeConnectionHorizontal width="w-96" />

          {/* NIVEL 3: VALERIANO (IZQUIERDA), FRANCISCO JAVIER (CENTRO), JOSÉ LUIS (DERECHA) */}
          <div className="flex items-center gap-16 mb-8">
            {gerencias?.aldaia?.gerente && (
              <CircularPersonCard 
                persona={gerencias.aldaia.gerente} 
                variant="department"
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {getDirectivoByRole('Director Comercial Nacional') && (
              <CircularPersonCard 
                persona={getDirectivoByRole('Director Comercial Nacional')!}
                variant="commercial"
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            )}
            {gerencias?.elRomeral?.gerente && (
              <CircularPersonCard 
                persona={gerencias.elRomeral.gerente} 
                variant="team"
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
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
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.aldaia?.equipos?.coscollar?.planificador && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.equipos.coscollar.planificador} 
                    variant="department"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
              </div>

              <VerticalArrow height="h-6" />

              {/* Los 3 trabajadores en paralelo */}
              <div className="flex gap-6">
                {gerencias?.aldaia?.equipos?.coscollar?.jefeTrafico && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.equipos.coscollar.jefeTrafico} 
                    variant="department"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.aldaia?.equipos?.coscollar?.responsable && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.equipos.coscollar.responsable} 
                    variant="department"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.aldaia?.equipos?.serraEspada?.descarga && (
                  <CircularPersonCard 
                    persona={gerencias.aldaia.equipos.serraEspada.descarga} 
                    variant="department"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
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
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                <CircularPersonCard 
                  persona={{
                    id: "jefa-administracion-central",
                    nombre: "María Concepción Fernández",
                    puesto: "Jefa de Administración"
                  }}
                  variant="team"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>

              <VerticalArrow height="h-6" />

              {/* Jefes de Planta */}
              <div className="grid grid-cols-2 gap-6">
                {gerencias?.elRomeral?.equipos?.plantaResiduos?.responsable && (
                  <CircularPersonCard 
                    persona={gerencias.elRomeral.equipos.plantaResiduos.responsable} 
                    variant="team"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
                {gerencias?.elRomeral?.equipos?.plantaFiltros?.responsable && (
                  <CircularPersonCard 
                    persona={gerencias.elRomeral.equipos.plantaFiltros.responsable} 
                    variant="team"
                    videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
