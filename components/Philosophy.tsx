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
          {/* Economía Circular */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Economía Circular</h3>
            <p className="text-gray-600 leading-relaxed">
              Convertimos los residuos en nuevos recursos, cerrando el ciclo productivo y minimizando el impacto ambiental.
            </p>
          </div>

          {/* Innovación Tecnológica */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovación Tecnológica</h3>
            <p className="text-gray-600 leading-relaxed">
              Aplicamos las últimas tecnologías en clasificación, tratamiento y valorización de residuos para maximizar la eficiencia.
            </p>
          </div>

          {/* Compromiso Sostenible */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-tertiary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-tertiary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compromiso Sostenible</h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestro compromiso con el planeta va más allá del cumplimiento normativo: es parte de nuestra identidad empresarial.
            </p>
          </div>
        </div>

        {/* Métricas de Impacto */}
        <div className="bg-white rounded-full shadow-3xl px-12 py-16 md:px-16 md:py-20 border-4 border-primary-100 hover:shadow-4xl transition-all duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nuestro Impacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15.000+</div>
              <div className="text-gray-600">Toneladas procesadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">85%</div>
              <div className="text-gray-600">Tasa de valorización</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tertiary-600 mb-2">N/A</div>
              <div className="text-gray-600">Sustituir</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">N/A</div>
              <div className="text-gray-600">Sustituir</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
