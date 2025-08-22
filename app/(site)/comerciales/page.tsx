import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Área Comercial - Metalls del Camp',
  description: 'Nuestro equipo comercial especializado en gestión de residuos. Contacta con nosotros para soluciones personalizadas.',
};

export default function ComercialesPage() {
  const comerciales = [
    {
      id: 1,
      nombre: "Josep Maria Torrent",
      cargo: "Director Comercial",
      email: "jm.torrent@metallsdelcamp.com",
      telefono: "+34 973 45 67 89",
      zona: "Cataluña",
      especializacion: "Grandes Generadores Industriales"
    },
    {
      id: 2,
      nombre: "Anna Rodriguez",
      cargo: "Responsable Comercial",
      email: "a.rodriguez@metallsdelcamp.com",
      telefono: "+34 973 45 67 90",
      zona: "Aragón y Valencia",
      especializacion: "Construcción y Demolición"
    },
    {
      id: 3,
      nombre: "Marc Solé",
      cargo: "Técnico Comercial",
      email: "m.sole@metallsdelcamp.com",
      telefono: "+34 973 45 67 91",
      zona: "Baleares",
      especializacion: "Sector Naval y Portuario"
    },
    {
      id: 4,
      nombre: "Laura Vidal",
      cargo: "Consultora Ambiental",
      email: "l.vidal@metallsdelcamp.com",
      telefono: "+34 973 45 67 92",
      zona: "Madrid y Centro",
      especializacion: "Certificaciones y Cumplimiento"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-dark-to-br text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Área Comercial
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Expertos en gestión de residuos a tu disposición
            </p>
          </div>
        </div>
      </section>

      {/* Equipo Comercial */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nuestro Equipo Comercial
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {comerciales.map((comercial) => (
              <div key={comercial.id} className="bg-white rounded-full shadow-2xl px-8 py-12 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-28 h-28 bg-gradient-light-to-br rounded-full mx-auto mb-6 flex items-center justify-center text-gray-900 text-3xl font-bold">
                    {comercial.nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{comercial.nombre}</h3>
                  <p className="text-primary-600 font-semibold text-sm">{comercial.cargo}</p>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${comercial.email}`} className="hover:text-primary-600 transition-colors">
                      {comercial.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${comercial.telefono}`} className="hover:text-primary-600 transition-colors">
                      {comercial.telefono}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{comercial.zona}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-secondary-600">
                      Especialización:
                    </p>
                    <p className="text-sm text-gray-600">
                      {comercial.especializacion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Comerciales */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Servicios Comerciales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Evaluación Gratuita</h3>
              <p className="text-gray-700">
                Análisis detallado de sus residuos y propuesta de valorización personalizada sin compromiso.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Contratos Flexibles</h3>
              <p className="text-gray-700">
                Adaptamos nuestros servicios a sus necesidades con contratos ajustables según volumen y frecuencia.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Asesoramiento Legal</h3>
              <p className="text-gray-700">
                Garantizamos el cumplimiento de toda la normativa ambiental y de gestión de residuos vigente.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Reporting Continuo</h3>
              <p className="text-gray-700">
                Informes detallados de gestión, certificados de destrucción y trazabilidad completa del proceso.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Contactar Equipo Comercial
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
