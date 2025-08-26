'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonio {
  texto: string;
  autor: string;
  empresa?: string;
  sector?: string;
}

const testimonios: Testimonio[] = [
  {
    texto: "Una de las mejores empresas del sector sin duda alguna, gestionan todo tipo de residuos, las retiradas son rápidas, puntuales y limpias. No se puede pedir más a la hora de tratar este tipo de residuos, y para cualquier problema, avería o cambio en las recogidas hablando con Javier te lo soluciona rápido y sin molestias.",
    autor: "Daniel Cordón"
  },
  {
    texto: "Empresa profesional y seria. Todo el trato con ellos es excepcional hasta el momento. Conocedores del sector, dan respuesta inmediata a las consultas y gestiones que se les ha planteado. Repito, trato inmejorable y muy profesional.",
    autor: "Moisés"
  },
  {
    texto: "Profesionales es poco. Puntualidad en la recogida. Calidad precio, insuperable. Cualquier duda o problema lo resuelven en la mayor brevedad posible. Gracias Javi por tu profesionalidad!!!",
    autor: "Francisco Javier Romero"
  },
  {
    texto: "Servicio de máquinas eficaz, el chófer que viene es atento y resolutivo ante cualquier duda sobre el funcionamiento y mantenimiento de las máquinas. Con respecto a la gestión de residuos son muy rápidos cuando realizan alguna recogida y procuran dejarlo todo en orden y asegurándose siempre de dejar clara cualquier duda o pregunta. EXCELENTE SERVICIO! Seguid así",
    autor: "Juan José Muñoz"
  }
];

export default function TestimoniosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonios
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonio = () => {
    setCurrentIndex(currentIndex === testimonios.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonio = () => {
    setCurrentIndex(currentIndex === 0 ? testimonios.length - 1 : currentIndex - 1);
  };

  const goToTestimonio = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Testimonios de Clientes
        </h2>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <span>Contamos con un</span>
            <div className="flex items-center gap-1">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-yellow-600">4,7</span>
            </div>
            <span>según las reseñas de Google</span>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonio principal */}
          <div 
            className="bg-gray-50 rounded-full px-12 py-16 shadow-2xl border-2 border-gray-200 min-h-[400px] flex flex-col justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onFocus={() => setIsAutoPlaying(false)}
            onBlur={() => setIsAutoPlaying(true)}
            tabIndex={0}
            role="region"
            aria-label="Testimonio actual"
          >
            <div className="text-center">
              {/* Icono de comillas */}
              <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-8 flex items-center justify-center">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>

              {/* Texto del testimonio */}
              <blockquote className="text-gray-700 text-xl italic mb-8 px-8 leading-relaxed">
                &ldquo;{testimonios[currentIndex].texto}&rdquo;
              </blockquote>
              
              {/* Autor */}
              <cite className="text-primary-600 font-semibold not-italic text-xl">
                — {testimonios[currentIndex].autor}
              </cite>
              
              {/* Empresa y sector si están disponibles */}
              {testimonios[currentIndex].empresa && (
                <div className="mt-2">
                  <p className="text-gray-600 text-sm">
                    {testimonios[currentIndex].empresa}
                    {testimonios[currentIndex].sector && ` - ${testimonios[currentIndex].sector}`}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Botones de navegación */}
          <button 
            onClick={prevTestimonio}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:border-primary-500 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-500" />
          </button>

          <button 
            onClick={nextTestimonio}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:border-primary-500 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-500" />
          </button>
        </div>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonio(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'bg-primary-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} de {testimonios.length}
          </span>
        </div>
      </div>
    </section>
  );
}
