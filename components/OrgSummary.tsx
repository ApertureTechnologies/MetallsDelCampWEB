'use client';

export default function OrgSummary() {
  const stats = [
    {
      label: 'Años de experiencia',
      value: '17'
    },
    {
      label: 'Equipos instalados',
      value: '18.000'
    },
    {
      label: 'Proyectos completados',
      value: '250+'
    },
    {
      label: 'Instalaciones',
      value: '5'
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gray-50" aria-labelledby="org-summary-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 id="org-summary-title" className="text-[clamp(1.25rem,2vw,2rem)] font-bold text-gray-900 mb-3 sm:mb-4">
            Resumen Organizacional
          </h2>
          <p className="text-[clamp(0.95rem,1.2vw,1.125rem)] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estructura eficiente organizadas por divisiones geográficas para un mejor servicio
          </p>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <dt className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                {stat.label}
              </dt>
              <dd className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 group-hover:scale-110 transition-transform">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Equipo profesional distribuido entre nuestras divisiones Levante y Centro
          </p>
        </div>
      </div>
    </section>
  );
}
