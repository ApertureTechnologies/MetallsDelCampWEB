import type { Metadata } from 'next';
import Link from 'next/link';
import TestimoniosCarousel from '@/components/TestimoniosCarousel';

export const metadata: Metadata = {
  title: 'Nuestros Clientes - Metalls del Camp',
  description: 'Casos de éxito y testimonios de nuestros clientes en la gestión de residuos. Sectores atendidos y resultados obtenidos.',
};

export default function ClientesPage() {
  const sectores = [
    {
      nombre: "Automoción",
      descripcion: "Reciclaje de vehículos fuera de uso y componentes",
      icono: "🚗"
    },
    {
      nombre: "Construcción y Demolición",
      descripcion: "Gestión integral de residuos de obras y demoliciones",
      icono: "🏗️"
    },
    {
      nombre: "Industria Manufacturera",
      descripcion: "Valorización de recortes y materiales de producción",
      icono: "🏭"
    },
    {
      nombre: "Sector Naval",
      descripcion: "Desguace y reciclaje de embarcaciones",
      icono: "⚓"
    }
  ];

  const autorizaciones = [
    "Autorización 157/G02/CV - ALMACENAMIENTO RESIDUOS PELIGROSOS",
    "Autorización 33383/P02/CV - PEQUEÑO PRODUCTOR RESID.PELIGROSOS",
    "Autorización 374/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS",
    "Autorización 3873/P04/CV - PEQUEÑO PRODUCT.RESID.NO PELIGROSOS",
    "Autorización 79/T01/CV - TRANSPORTISTA RESIDUOS PELIGROSOS",
    "Autorización 361/T02/CV - TRANSPORTISTA RESID. NO PELIGROSOS",
    "Autorización 1021/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-light-primary text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros Clientes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Casos de éxito en gestión sostenible en el sector de la Automoción.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas por Sector */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Sectores Atendidos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectores.map((sector, index) => (
              <div key={index} className="bg-white rounded-full shadow-2xl px-6 py-12 text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100">
                <div className="text-6xl mb-6">{sector.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.nombre}</h3>
                <p className="text-gray-600 mb-6 px-2">{sector.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimoniosCarousel />

      {/* Certificaciones */}
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
            {autorizaciones.map((cert, index) => (
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
      <section className="py-16 bg-gradient-dark-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Quieres formar parte de nuestros casos de éxito?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 10.000 empresas que confían en nosotros para la gestión sostenible de sus residuos.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 cursor-pointer"
            >
              Pide Cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
