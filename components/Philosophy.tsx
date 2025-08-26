export default function Philosophy() {
  return (
    <section className="py-16 bg-gray-50" id="filosofia" aria-labelledby="filosofia-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="filosofia-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestra Filosofía
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos residuos en recursos a través de procesos innovadores y sostenibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Fiabilidad */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fiabilidad</h3>
            <p className="text-gray-600 leading-relaxed">
              En Metalls del Camp, tu confianza es nuestra prioridad. Cumplimos cada compromiso con puntualidad y precisión, porque sabemos que tu tiempo y tu tranquilidad no tienen precio.
            </p>
          </div>

          {/* Seguridad Medioambiental */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Seguridad Medioambiental</h3>
            <p className="text-gray-600 leading-relaxed">
              Más que cumplir la ley, protegemos lo que es tuyo: tu reputación, tus instalaciones y el entorno donde vivimos. Cada residuo recibe el destino correcto, con trazabilidad y total garantía.
            </p>
          </div>

          {/* Cercanía y Compromiso */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-tertiary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-tertiary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cercanía y Compromiso</h3>
            <p className="text-gray-600 leading-relaxed">
              Para nosotros, no eres un número. Escuchamos, entendemos y adaptamos nuestros servicios a tus necesidades, trabajando a tu lado como un socio que comparte tus valores y objetivos.
            </p>
          </div>
        </div>

        {/* Métricas de Impacto - Burbujas individuales */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">Nuestro Impacto</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Burbuja 1 */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-primary-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="text-3xl font-bold text-primary-600 mb-2">15.000+</div>
              <div className="text-gray-600 text-center px-4">Toneladas procesadas</div>
            </div>
          </div>

          {/* Burbuja 2 */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-secondary-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="text-3xl font-bold text-secondary-600 mb-2">85%</div>
              <div className="text-gray-600 text-center px-4">Tasa de valorización</div>
            </div>
          </div>

          {/* Burbuja 3 */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-tertiary-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="text-3xl font-bold text-tertiary-600 mb-2">10.000+</div>
              <div className="text-gray-600 text-center px-4">Clientes satisfechos</div>
            </div>
          </div>

          {/* Burbuja 4 */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-2xl w-48 h-48 flex flex-col items-center justify-center border-4 border-accent-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="text-3xl font-bold text-accent-600 mb-2">17+</div>
              <div className="text-gray-600 text-center px-4">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
