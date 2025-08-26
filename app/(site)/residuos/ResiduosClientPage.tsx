'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { 
  RiMoneyDollarCircleLine, 
  RiBuildingLine, 
  RiTruckLine, 
  RiScales3Line, 
  RiShieldCheckLine 
} from 'react-icons/ri';
import residuosData from '@/content/residuos.page';
import YouTubeModal from '@/components/YouTubeModal';

export default function ResiduosClientPage() {
  const { intro } = residuosData;
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-residuos.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tu taller, libre de residuos
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              Recogemos, clasificamos y tratamos residuos peligrosos y no peligrosos con la máxima seguridad y respaldo legal.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="space-y-8">
              {intro.map((parrafo, index) => (
                <p key={index} className="text-xl text-gray-800 leading-relaxed font-medium text-center first:text-2xl first:font-semibold first:text-primary-700">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? - Burbujas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿POR QUÉ ELEGIRNOS?
            </h2>
          </div>

          {/* Anillos Olímpicos - ¿Por qué elegirnos? */}
          <div className="flex flex-col items-center justify-center mb-16">
            {/* Fila superior - 3 anillos centrados */}
            <div className="flex justify-center items-center gap-8 mb-12 ">
              {/* Anillo 1 - Azul */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full border-8 border-blue-500 bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-110 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <RiMoneyDollarCircleLine className="text-white text-3xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Mejores Precios
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Los mejores precios del mercado por aceites, chatarra y baterías.
                    </p>
                  </div>
                </div>
              </div>

              {/* Anillo 2 - Morado */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full border-8 border-purple-600 bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-110 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <RiBuildingLine className="text-white text-3xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Gestores Finales
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Planta propia de filtros garantiza menores costes y mayor control.
                    </p>
                  </div>
                </div>
              </div>

              {/* Anillo 3 - Rojo */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full border-8 border-red-500 bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-110 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <RiTruckLine className="text-white text-3xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Infraestructura Propia
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Flota completa sin depender de terceros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila inferior - 2 anillos centrados */}
            <div className="flex justify-center items-center gap-24 mt-2">
              {/* Anillo 4 - Amarillo */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full border-8 border-yellow-500 bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-110 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <RiScales3Line className="text-white text-3xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Cumplimiento Legal
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Todas las licencias y autorizaciones necesarias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Anillo 5 - Verde */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-full border-8 border-green-500 bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-110 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <RiShieldCheckLine className="text-white text-3xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Compromiso Total
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Recogidas puntuales y máxima transparencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo lo hacemos? - 3 Píldoras horizontales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿CÓMO LO HACEMOS?
            </h2>
          </div>

          <div className="space-y-8">
            {/* Píldora 1 - Contamos con (Color Rojo/Rosa) */}
            <div className="bg-white rounded-full px-12 py-8 shadow-2xl border-4 border-primary-400 hover:shadow-3xl transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contamos con:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-5xl mx-auto">
                  <div className="text-gray-700 text-base">
                    • Camiones cisterna de cualquier tamaño
                  </div>
                  <div className="text-gray-700 text-base">
                    • Furgonetas
                  </div>
                  <div className="text-gray-700 text-base">
                    • Camiones con puerta elevadora de cualquier tonelaje
                  </div>
                  <div className="text-gray-700 text-base">
                    • Autobomba para aceite en camiones híbridos
                  </div>
                  <div className="text-gray-700 text-base">
                    • Portacontenedores
                  </div>
                  <div className="text-gray-700 text-base">
                    • Camión con remolque
                  </div>
                  <div className="text-gray-700 text-base">
                    • Contenedores cadeneros de 5m³ a 14m³
                  </div>
                  <div className="text-gray-700 text-base">
                    • Contenedores multilift de 14m³ a 40m³
                  </div>
                  <div className="text-gray-700 text-base">
                    • Camiones equipados con grúa y pinza de pulpo para recogida de materiales a granel
                  </div>
                </div>
              </div>
            </div>

            {/* Píldora 2 - Trabajamos con (Color Verde) */}
            <div className="bg-white rounded-full px-12 py-8 shadow-2xl border-4 border-secondary-400 hover:shadow-3xl transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Trabajamos con:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                  <div className="text-gray-700 text-base">
                    • Bidones de 25
                  </div>
                  <div className="text-gray-700 text-base">
                    • Bidones de 50
                  </div>
                  <div className="text-gray-700 text-base">
                    • Bidones de 120
                  </div>
                  <div className="text-gray-700 text-base">
                    • Bidones de 200
                  </div>
                  <div className="text-gray-700 text-base">
                    • Bidones de 1000 / GRG
                  </div>
                  <div className="text-gray-700 text-base">
                    • Boxes
                  </div>
                  <div className="text-gray-700 text-base">
                    • Sacas
                  </div>
                  <div className="text-gray-700 text-base">
                    • Jaula para paragolpes
                  </div>
                  <div className="text-gray-700 text-base">
                    • Jaula para plancha
                  </div>
                  <div className="text-gray-700 text-base">
                    • Jaula para lunas
                  </div>
                </div>
              </div>
            </div>

            {/* Píldora 3 - Facilitamos (Color Amarillo) */}
            <div className="bg-white rounded-full px-12 py-8 shadow-2xl border-4 border-tertiary-400 hover:shadow-3xl transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Facilitamos:
                </h3>
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-gray-700 text-base">
                    • Cubetas colectoras antiderrames de primera calidad fabricadas bajo pedido
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo son los servicios con Metalls del Camp? - Píldora */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-full px-16 py-12 shadow-3xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Cómo son los servicios con Metalls del Camp?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Descubre de primera mano cómo trabajamos y por qué somos la mejor opción
            </p>
            <button
              onClick={() => openVideoModal('VIDEO_ID_SERVICIOS', '¿Cómo son los servicios con Metalls del Camp?')}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl cursor-pointer transform hover:scale-105"
            >
              <FaPlay className="w-5 h-5 mr-3" />
              Ver Video de Servicios
            </button>
          </div>
        </div>
      </section>

      {/* Échale un vistazo a nuestros camiones - Píldoras */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Échale un vistazo a nuestros camiones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce de cerca nuestra flota especializada en la recogida y transporte de residuos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Campa - Píldora */}
            <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-full px-12 py-16 shadow-3xl text-center text-white transform hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6">
                Camión Campa
              </h3>
              <p className="text-lg mb-10 opacity-90 max-w-md mx-auto">
                Especializado en recogida de aceites y residuos líquidos
              </p>
              <button
                onClick={() => openVideoModal('VIDEO_ID_CAMPA', 'Camión Campa - Metalls del Camp')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl cursor-pointer"
              >
                <FaPlay className="w-5 h-5 mr-3" />
                Ver Video Campa
              </button>
            </div>

            {/* Video Ilyan - Píldora */}
            <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-full px-12 py-16 shadow-3xl text-center text-white transform hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6">
                Camión Ilyan
              </h3>
              <p className="text-lg mb-10 opacity-90 max-w-md mx-auto">
                Especializado en recogida de chatarra y materiales metálicos
              </p>
              <button
                onClick={() => openVideoModal('VIDEO_ID_ILYAN', 'Camión Ilyan - Metalls del Camp')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl cursor-pointer"
              >
                <FaPlay className="w-5 h-5 mr-3" />
                Ver Video Ilyan
              </button>
            </div>
          </div>
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
