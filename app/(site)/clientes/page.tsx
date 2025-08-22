import type { Metadata } from 'next';
import Link from 'next/link';

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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Testimonios de Clientes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-gray-50 rounded-full px-8 py-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-dark-to-br rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {testimonio.empresa.charAt(0)}
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 mb-1">{testimonio.empresa}</h3>
                    <p className="text-sm text-gray-600">{testimonio.sector}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 text-center px-2 text-sm">
                  &ldquo;{testimonio.testimonio}&rdquo;
                </blockquote>
                
                <cite className="text-xs text-primary-600 font-semibold not-italic text-center block">
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
