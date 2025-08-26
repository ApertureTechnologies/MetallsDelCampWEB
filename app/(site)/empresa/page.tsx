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
      {/* Nuestra Historia - Bloque combinado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 17 años transformando la industria de gestión de residuos
            </p>
          </div>

          {/* Cifras en horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-green-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-center px-4 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje "Desde 2008" en cápsula más ancha */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-4 flex justify-center">
              <div className="bg-gradient-to-r from-red-400 to-yellow-300 rounded-full shadow-3xl px-16 py-12 w-full max-w-6xl hover:shadow-4xl transition-all duration-500 transform hover:scale-105">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Desde 2008</h3>
                  </div>
                  
                  <div className="text-white text-xl leading-relaxed space-y-4 mb-8">
                    <p>
                      Creamos un nuevo concepto empresarial en tratamiento de desechos, 
                      adaptándonos a cualquier sector y volumen de negocio.
                    </p>
                    <p>
                      Nuestro fundamento se basa en la <strong>calidad</strong> y las <strong>relaciones duraderas </strong> 
                      con nuestros proveedores y clientes.
                    </p>
                    <p>
                      Hoy operamos desde 4 instalaciones estratégicamente ubicadas, procesamos más de 35.000 toneladas anuales 
                      y servimos a más de 365 clientes en toda España, manteniendo siempre nuestro compromiso con la excelencia 
                      y la sostenibilidad.
                    </p>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Link
                      href="/instalaciones"
                      className="inline-flex items-center px-6 py-3 text-base font-medium text-red-600 bg-white hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      Ver Instalaciones
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center px-6 py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                    >
                      Contactar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center px-6 py-12 bg-gray-50 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
                <div className="text-6xl mb-6">{valor.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{valor.titulo}</h3>
                <p className="text-gray-600 text-sm px-2">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <CEOMessage />

      {/* Organigrama */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Equipo Directivo
          </h2>
          <OrgChart />
        </div>
      </section>

      {/* Filosofía */}
      <Philosophy />

      {/* Autorizaciones Medioambientales */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/certificadomedioambiental.jpg')"
        }}
      >
        {/* Overlay para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Autorizaciones Medioambientales y Acreditaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Autorización 157/G02/CV - ALMACENAMIENTO RESIDUOS PELIGROSOS',
              'Autorización 33383/P02/CV - PEQUEÑO PRODUCTOR RESID.PELIGROSOS', 
              'Autorización 374/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS',
              'Autorización 3873/P04/CV - PEQUEÑO PRODUCT.RESID.NO PELIGROSOS',
              'Autorización 79/T01/CV - TRANSPORTISTA RESIDUOS PELIGROSOS',
              'Autorización 361/T02/CV - TRANSPORTISTA RESID. NO PELIGROSOS',
              'Autorización 1021/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-full py-4 px-6 shadow-lg flex items-center justify-center border-2 border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium text-sm text-center">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-dark-to-br text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Quieres conocer más sobre nosotros?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contacta con nuestro equipo para una visita a nuestras instalaciones 
            o una reunión personalizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 cursor-pointer"
            >
              Contactar
            </Link>
            <Link
              href="/instalaciones"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 cursor-pointer"
            >
              Ver Instalaciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
