import type { Metadata } from 'next';
import Link from 'next/link';
import OrgChart from '@/components/OrgChart';
import CEOMessage from '@/components/CEOMessage';
import Philosophy from '@/components/Philosophy';

export const metadata: Metadata = {
  title: 'Nuestra Empresa - Metalls del Camp',
  description: 'Conoce Metalls del Camp: líderes en gestión sostenible de residuos metálicos. Historia, valores, equipo directivo y compromiso ambiental.',
};

export default function EmpresaPage() {
  const stats = [
    { label: 'Años de experiencia', value: '25+' },
    { label: 'Toneladas anuales', value: '35,000' },
    { label: 'Clientes activos', value: '365+' },
    { label: 'Instalaciones', value: '4' },
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
      {/* Hero Section */}
      <section className="bg-gradient-light-to-br text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestra Empresa
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              25 años liderando la gestión sostenible de residuos metálicos
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nuestra Historia
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg mx-auto">
              <p>
                Desde el año 2008 creamos un nuevo concepto empresarial en tratamiento de desechos.
                Nos adaptamos a cualquier sector y volumen de negocio. La reclamación actual con el medioambiente,
                anima a crear un nuevo concepto empresarial en tratamiento de desechos. Un criterio de aplicación, con un fundamento al que somos fieles,
                 calidad, y relaciones duraderas con nuestros proveedores y clientes.
              </p>
              
     
              <p>
                Hoy operamos desde cuatro instalaciones estratégicamente ubicadas, 
                procesamos más de 35.000 toneladas anuales y servimos a más de 365 clientes 
                en toda España, manteniendo siempre nuestro compromiso con la excelencia 
                y la sostenibilidad.
              </p>
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
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{valor.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
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
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Autorizaciones Medioambientales y Acreditaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Autorización 157/G02/CV',
              'Autorización 33383/P02/CV', 
              'Autorización 374/G04/CV',
              'Autorización 3873/P04/CV',
              'Autorización 79/T01/CV',
              'Autorización 361/T02/CV',
              'Autorización 1021/G04/CV'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">{cert}</h3>
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
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Contactar
            </Link>
            <Link
              href="/instalaciones"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Ver Instalaciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
