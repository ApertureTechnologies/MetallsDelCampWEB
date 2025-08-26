'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

interface MaquinariaModalProps {
  maquinaria: {
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
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MaquinariaModal({ maquinaria, isOpen, onClose }: MaquinariaModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !maquinaria) return null;

  const allImages = [maquinaria.image, ...(maquinaria.images || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleBackdropKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop con blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleBackdropKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Cerrar modal"
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{maquinaria.title}</h2>
            {maquinaria.category && (
              <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {maquinaria.category}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${maquinaria.title} - Imagen ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Navegación de imágenes */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <FaChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <FaChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Miniaturas */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        index === currentImageIndex 
                          ? 'border-primary-500 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
              
              {/* Contador de imágenes */}
              {allImages.length > 1 && (
                <p className="text-sm text-gray-500 text-center">
                  {currentImageIndex + 1} de {allImages.length}
                </p>
              )}
            </div>

            {/* Información */}
            <div className="space-y-6">
              {/* Descripción */}
              {maquinaria.desc && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
                  <p className="text-gray-700 leading-relaxed">{maquinaria.desc}</p>
                </div>
              )}

              {/* Especificaciones */}
              {maquinaria.specifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones</h3>
                  <div className="space-y-2">
                    {maquinaria.specifications.capacity && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">Capacidad:</span>
                        <span className="text-gray-900">{maquinaria.specifications.capacity}</span>
                      </div>
                    )}
                    {maquinaria.specifications.power && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">Potencia:</span>
                        <span className="text-gray-900">{maquinaria.specifications.power}</span>
                      </div>
                    )}
                    {maquinaria.specifications.dimensions && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">Dimensiones:</span>
                        <span className="text-gray-900">{maquinaria.specifications.dimensions}</span>
                      </div>
                    )}
                    {maquinaria.specifications.weight && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">Peso:</span>
                        <span className="text-gray-900">{maquinaria.specifications.weight}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Características */}
              {maquinaria.features && maquinaria.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Características</h3>
                  <ul className="space-y-2">
                    {maquinaria.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button className="px-4 py-2 text-white bg-primary-600 border border-primary-600 rounded-lg hover:bg-primary-700 transition-colors cursor-pointer">
            Solicitar información
          </button>
        </div>
      </div>
    </div>
  );
}
