'use client';

import { getEquipo } from '@/lib/content/loaders';

export default function OrgSummary() {
  const equipo = getEquipo();
  const totalEmployees = equipo.getTotalEmployees();

  const stats = [
    {
      label: 'Total Empleados',
      value: totalEmployees.toString()
    },
    {
      label: 'Directiva',
      value: (1 + equipo.directiva.length).toString() // Director General + directiva
    },
    {
      label: 'Gerencias',
      value: '2' // Aldaia y El Romeral
    },
    {
      label: 'Plantas',
      value: '5' // Instalaciones
    }
  ];

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="org-summary-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="org-summary-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Resumen Organizacional
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estructura eficiente organizadas por divisiones geográficas para un mejor servicio
          </p>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200"
            >
              <dt className="text-sm font-medium text-gray-500 mb-2">
                {stat.label}
              </dt>
              <dd className="text-3xl font-bold text-primary-600">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Equipo profesional distribuido entre nuestras divisiones Levante y Centro
          </p>
        </div>
      </div>
    </section>
  );
}
