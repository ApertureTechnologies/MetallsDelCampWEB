'use client';

import { useState } from 'react';
import { getMaquinarias } from '@/lib/content/loaders';
import MaquinariaModal from '@/components/MaquinariaModal';

interface Maquinaria {
  slug: string;
  title: string;
  desc?: string;
  image: string;
  category?: string;
  specifications?: {
    capacity?: string;
    power?: string;
    dimensions?: string;
    weight?: string;
  };
  features?: string[];
  images?: string[];
}

export default function MaquinariasPage() {
  const allMaquinarias = getMaquinarias();
  const [selectedMaquinaria, setSelectedMaquinaria] = useState<Maquinaria | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMaquinariaClick = (maquinaria: Maquinaria) => {
    setSelectedMaquinaria(maquinaria);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMaquinaria(null);
  };

  // Componente para burbuja simplificada
  const MaquinariaBubble = ({ maquinaria, category }: { maquinaria: Maquinaria; category: string }) => (
    <article 
      key={maquinaria.slug}
      onClick={() => handleMaquinariaClick(maquinaria)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleMaquinariaClick(maquinaria);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${maquinaria.title}`}
      className="group cursor-pointer"
    >
      {/* Burbuja oval simplificada */}
      <div className="relative bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 rounded-full aspect-[4/5] p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
        {/* Contenido centrado - Solo título */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white relative z-10">
          {/* Título principal */}
          <h3 className="text-xl font-bold leading-tight px-4">
            {maquinaria.title}
          </h3>
          
          {/* Categoría en la parte inferior */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </div>
          </div>
        </div>

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 via-primary-600/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Solo título y descripción */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-maquinarias.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              La maquinaria que necesitas, sin complicaciones
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Equipos especializados, mantenimiento certificado y el respaldo de un gestor autorizado líder en el sector
            </p>
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

          {/* Maquinaria de Limpieza - Burbujas simplificadas */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              <span className="inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-lg">
                Maquinaria de Limpieza
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMaquinarias.slice(0, 9).map((maquinaria) => (
                <MaquinariaBubble 
                  key={maquinaria.slug} 
                  maquinaria={maquinaria} 
                  category="Limpieza" 
                />
              ))}
            </div>
          </div>

          {/* Contenedores - Burbujas simplificadas */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              <span className="inline-block bg-secondary-100 text-secondary-800 px-6 py-3 rounded-lg">
                Contenedores
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMaquinarias.slice(9, 18).map((maquinaria) => (
                <MaquinariaBubble 
                  key={maquinaria.slug} 
                  maquinaria={maquinaria} 
                  category="Contenedores" 
                />
              ))}
            </div>
          </div>

          {/* Autocompactadoras - Burbujas simplificadas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              <span className="inline-block bg-accent-100 text-accent-800 px-6 py-3 rounded-lg">
                Autocompactadoras
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allMaquinarias.slice(18, 27).map((maquinaria) => (
                <MaquinariaBubble 
                  key={maquinaria.slug} 
                  maquinaria={maquinaria} 
                  category="Autocompactadoras" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <MaquinariaModal 
        maquinaria={selectedMaquinaria}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
