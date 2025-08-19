import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nuestros Clientes - Metalls del Camp',
  description: 'Casos de éxito y testimonios de nuestros clientes en la gestión de residuos metálicos. Sectores atendidos y resultados obtenidos.',
};

export default function ClientesPage() {
  const sectores = [
    {
      nombre: "Construcción y Demolición",
      descripcion: "Gestión integral de residuos de obras y demoliciones",
      empresas: 150,
      toneladas: 12500,
      icono: "🏗️"
    },
    {
      nombre: "Industria Manufacturera",
      descripcion: "Valorización de recortes y materiales de producción",
      empresas: 85,
      toneladas: 8900,
      icono: "🏭"
    },
    {
      nombre: "Sector Naval",
      descripcion: "Desguace y reciclaje de embarcaciones",
      empresas: 35,
      toneladas: 6200,
      icono: "⚓"
    },
    {
      nombre: "Automoción",
      descripcion: "Reciclaje de vehículos fuera de uso y componentes",
      empresas: 95,
      toneladas: 7800,
      icono: "🚗"
    }
  ];

  const testimonios = [
    {
      empresa: "Construcciones Vilanova S.L.",
      sector: "Construcción",
      testimonio: "Metalls del Camp ha revolucionado la gestión de residuos en nuestras obras. Su sistema de gestión integral nos permite cumplir con la normativa y obtener certificaciones ambientales de forma automática.",
      contacto: "Pere Vilanova, Director General",
      imagen: "/testimonials/vilanova.jpg"
    },
    {
      empresa: "Astilleros Costa Brava",
      sector: "Naval",
      testimonio: "La profesionalidad del equipo y la trazabilidad completa del proceso nos da total confianza. Hemos incrementado nuestras tasas de valorización un 40% desde que trabajamos con ellos.",
      contacto: "Marina Soler, Responsable Ambiental",
      imagen: "/testimonials/astilleros.jpg"
    },
    {
      empresa: "Metalúrgica Industrial Lleida",
      sector: "Manufacturera",
      testimonio: "Excelente servicio de recogida y valorización. Los informes detallados nos ayudan enormemente en nuestras auditorías ambientales y cumplimiento de autorizaciones medioambientales.",
      contacto: "Jordi Camps, Jefe de Producción",
      imagen: "/testimonials/metalurgica.jpg"
    }
  ];

  const certificaciones = [
    "Autorización 157/G02/CV - Residuos Peligrosos",
    "Autorización 33383/P02/CV - Tratamiento Metálicos",
    "Autorización 374/G04/CV - Valorización",
    "Autorización 3873/P04/CV - Tratamiento Físico-Químico",
    "Autorización 79/T01/CV - Transporte Peligrosos",
    "Autorización 1021/G04/CV - Residuos No Peligrosos"
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
              Casos de éxito en gestión sostenible de residuos metálicos
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
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{sector.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.nombre}</h3>
                <p className="text-gray-600 mb-6">{sector.descripcion}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Empresas:</span>
                    <span className="font-bold text-primary-600">{sector.empresas}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Toneladas/año:</span>
                    <span className="font-bold text-secondary-600">{sector.toneladas.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Testimonios de Clientes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-dark-to-br rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonio.empresa.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonio.empresa}</h3>
                    <p className="text-sm text-gray-600">{testimonio.sector}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-4">
                  &ldquo;{testimonio.testimonio}&rdquo;
                </blockquote>
                
                <cite className="text-sm text-primary-600 font-semibold not-italic">
                  — {testimonio.contacto}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Certificaciones y Avales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificaciones.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow flex items-center">
                <svg className="w-6 h-6 text-secondary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium">{cert}</span>
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
            Únete a más de 365 empresas que confían en nosotros para la gestión sostenible de sus residuos metálicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Solicitar Presupuesto
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Pide Cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
