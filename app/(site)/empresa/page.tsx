import type { Metadata } from 'next';
import Link from 'next/link';
import OrgChart from '@/components/OrgChart';
import CEOMessage from '@/components/CEOMessage';
import Philosophy from '@/components/Philosophy';

export const metadata: Metadata = {
  title: 'Nuestra Empresa - Metalls del Camp',
  description: 'Conoce Metalls del Camp: líderes en gestión sostenible de residuos. Historia, valores, equipo directivo y compromiso ambiental.',
};

export default function EmpresaPage() {
  const stats = [
    { label: 'Años de experiencia', value: '+17' },
    { label: 'Equipos Instalados', value: '+18,000' },
    { label: 'Residuos gestionados', value: '13' },
    { label: 'Instalaciones', value: '5' },
  ];

  const valores = [
    {
      titulo: 'Sostenibilidad',
      descripcion: 'Compromiso con el medio ambiente y la economía circular',
      icono: '🌱'
    },
    {
      titulo: 'Innovación',
      descripcion: 'Tecnología avanzada mediante Inteligencia Artificial',
      icono: '⚡'
    },
    {
      titulo: 'Transparencia',
      descripcion: 'Trazabilidad completa y reporting detallado',
      icono: '🔍'
    },
    {
      titulo: 'Excelencia',
      descripcion: 'Máxima calidad en todos nuestros servicios',
      icono: '⭐'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nuestra Historia - Bloque responsive */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              Nuestra Historia
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 17 años transformando la industria de gestión de residuos
            </p>
          </div>

          {/* Cifras responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white rounded-full shadow-lg hover:shadow-xl w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center border-2 sm:border-4 border-green-100 transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-center px-2 sm:px-4 font-medium text-xs sm:text-sm lg:text-base leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje "Desde 2008" responsive */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-red-400 to-yellow-300 rounded-2xl sm:rounded-3xl lg:rounded-full shadow-lg hover:shadow-xl px-6 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-12 w-full max-w-6xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Desde 2008</h3>
                </div>
                
                <div className="text-white text-sm sm:text-base lg:text-xl leading-relaxed space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p>
                    Creamos un nuevo concepto empresarial en tratamiento de desechos, 
                    adaptándonos a cualquier sector y volumen de negocio.
                  </p>
                  <p>
                    Nuestro fundamento se basa en la <strong>calidad</strong> y las <strong>relaciones duraderas</strong> 
                    con nuestros proveedores y clientes.
                  </p>
                  <p className="hidden sm:block">
                    Hoy operamos desde 4 instalaciones estratégicamente ubicadas, procesamos más de 35.000 toneladas anuales 
                    y servimos a más de 365 clientes en toda España, manteniendo siempre nuestro compromiso con la excelencia 
                    y la sostenibilidad.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    href="/instalaciones"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-red-600 bg-white hover:bg-gray-50 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    Ver Instalaciones
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-white border-2 border-white hover:bg-white hover:text-red-600 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center px-4 sm:px-6 py-6 sm:py-8 lg:py-12 bg-gray-50 rounded-2xl sm:rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6">{valor.icono}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">{valor.titulo}</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <CEOMessage />

      {/* Organigrama */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center">
            Equipo Directivo
          </h2>
          <OrgChart />
        </div>
      </section>

      {/* Filosofía */}
      <Philosophy />

      {/* Autorizaciones Medioambientales responsive */}
      <section 
        className="py-8 sm:py-12 lg:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/certificadomedioambiental.jpg')"
        }}
      >
        {/* Overlay para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center">
            Autorizaciones Medioambientales y Acreditaciones
          </h2>
          
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {[
              'Autorización 157/G02/CV - ALMACENAMIENTO RESIDUOS PELIGROSOS',
              'Autorización 33383/P02/CV - PEQUEÑO PRODUCTOR RESID.PELIGROSOS', 
              'Autorización 374/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS',
              'Autorización 3873/P04/CV - PEQUEÑO PRODUCT.RESID.NO PELIGROSOS',
              'Autorización 79/T01/CV - TRANSPORTISTA RESIDUOS PELIGROSOS',
              'Autorización 361/T02/CV - TRANSPORTISTA RESID. NO PELIGROSOS',
              'Autorización 1021/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-full py-3 sm:py-4 px-4 sm:px-6 shadow-md hover:shadow-lg flex items-center justify-center border-2 border-gray-100 transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium text-xs sm:text-sm text-center leading-tight">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            ¿Quieres conocer más sobre nosotros?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 opacity-90">
            Contacta con nuestro equipo para una visita a nuestras instalaciones 
            o una reunión personalizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Contactar
            </Link>
            <Link
              href="/instalaciones"
              className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Ver Instalaciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
