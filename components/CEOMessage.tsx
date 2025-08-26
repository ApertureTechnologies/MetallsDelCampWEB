import { getSiteContent } from '@/lib/content/loaders';
import Logo from './Logo';

export default function CEOMessage() {
  const siteContent = getSiteContent();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50" id="mensaje-ceo" aria-labelledby="mensaje-ceo-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="mensaje-ceo-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Compromiso con el Futuro
          </h2>
          <div className="bg-white rounded-full shadow-3xl px-12 py-16 md:px-16 md:py-20 border-4 border-primary-100 hover:shadow-4xl transition-all duration-500 transform hover:scale-105">
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <div className="flex justify-center mb-6">
                <Logo 
                  type="completo" 
                  size="medium" 
                  className="h-24 w-auto" 
                  alt="Metalls del Camp"
                />
              </div>
              <p className="mb-6">
                En Metalls del Camp, creemos firmemente que la gestión responsable de residuos no es solo un compromiso ambiental, 
                sino una responsabilidad hacia las futuras generaciones.
              </p>
              <p className="mb-6">
                Nuestro enfoque en la economía circular nos permite transformar lo que antes se consideraba desecho en recursos valiosos, 
                creando valor tanto para nuestros clientes como para el medio ambiente.
              </p>
              <p>
                Trabajamos cada día para ser líderes en innovación sostenible, aplicando las mejores tecnologías y prácticas 
                para hacer de nuestro mundo un lugar mejor para todos.
              </p>
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  Ricard Escudé
                </p>
                <p className="text-primary-600 font-medium">
                  CEO, Metalls del Camp
                </p>
              </div>
              
              <div className="w-px h-12 bg-gray-300 hidden sm:block" aria-hidden="true" />
              
              <div className="flex items-center gap-4">
                <a
                  href={siteContent.home.ctas.primaryHref}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  aria-label={`Contactar: ${siteContent.home.ctas.primaryLabel}`}
                >
                  Hablemos
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
