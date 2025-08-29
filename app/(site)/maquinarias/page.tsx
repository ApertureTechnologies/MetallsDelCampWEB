'use client';

import { useState } from 'react';
import Image from 'next/image';
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

  // Filtrar máquinas por categoría
  const limpiezaMaquinarias = allMaquinarias.filter(m => m.category === 'Limpieza');
  const contenedoresMaquinarias = allMaquinarias.filter(m => m.category === 'Almacenamiento');
  const autocompactadorasMaquinarias = allMaquinarias.filter(m => 
    m.category === 'Compactación' || m.category === 'Trituración' || m.category === 'Separación'
  );

  const handleMaquinariaClick = (maquinaria: Maquinaria) => {
    setSelectedMaquinaria(maquinaria);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMaquinaria(null);
  };

  // Componente para card estilo tramitación medioambiental
  const MaquinariaCard = ({ maquinaria, category }: { maquinaria: Maquinaria; category: string }) => (
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
      {/* Card rectangular con imagen */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
        {/* Imagen de la maquinaria */}
        <div className="relative h-48 bg-gray-100">
          {maquinaria.image && (
            <Image
              src={maquinaria.image}
              alt={maquinaria.title}
              fill
              className="object-cover"
            />
          )}
          {/* Badge de categoría */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        
        {/* Contenido de la card */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {maquinaria.title}
          </h3>
          {maquinaria.desc && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {maquinaria.desc}
            </p>
          )}
          
          {/* Especificaciones básicas */}
          {maquinaria.specifications && (
            <div className="space-y-2 text-sm text-gray-500">
              {maquinaria.specifications.capacity && (
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Capacidad: {maquinaria.specifications.capacity}</span>
                </div>
              )}
              {maquinaria.specifications.power && (
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Potencia: {maquinaria.specifications.power}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Indicador de "Ver más" */}
          <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
            <span>Ver detalles</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
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
              {limpiezaMaquinarias.map((maquinaria) => (
                <MaquinariaCard 
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
              {contenedoresMaquinarias.map((maquinaria) => (
                <MaquinariaCard 
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
              {autocompactadorasMaquinarias.map((maquinaria) => (
                <MaquinariaCard 
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
