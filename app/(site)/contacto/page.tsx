import type { Metadata } from 'next';
import brandConfig from '../../../brand.config';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${brandConfig.company.name}. Estaremos encantados de ayudarte con tu próximo proyecto de metalurgia.`,
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestros servicios o para solicitar un presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              {/* Honeypot field - hidden */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px' }}
                aria-hidden="true"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    aria-describedby="nombre-error"
                  />
                  <div id="nombre-error" className="mt-1 text-sm text-error hidden" role="alert">
                    Por favor, introduce tu nombre
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className="mt-1 text-sm text-error hidden" role="alert">
                    Por favor, introduce un email válido
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-secondary-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-secondary-700 mb-2">
                  Asunto *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby="asunto-error"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="presupuesto">Solicitar presupuesto</option>
                  <option value="informacion">Información sobre servicios</option>
                  <option value="proyecto">Consulta sobre proyecto</option>
                  <option value="otro">Otro</option>
                </select>
                <div id="asunto-error" className="mt-1 text-sm text-error hidden" role="alert">
                  Por favor, selecciona un asunto
                </div>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                  placeholder="Cuéntanos más detalles sobre tu consulta o proyecto..."
                  aria-describedby="mensaje-error"
                ></textarea>
                <div id="mensaje-error" className="mt-1 text-sm text-error hidden" role="alert">
                  Por favor, introduce tu mensaje
                </div>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacidad"
                  name="privacidad"
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  aria-describedby="privacidad-error"
                />
                <label htmlFor="privacidad" className="ml-2 text-sm text-secondary-700">
                  He leído y acepto la{' '}
                  <a href="/legal/privacidad" className="text-primary-600 hover:text-primary-700 underline">
                    política de privacidad
                  </a>{' '}
                  *
                </label>
              </div>
              <div id="privacidad-error" className="text-sm text-error hidden" role="alert">
                Debes aceptar la política de privacidad
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby="submit-status"
              >
                Enviar mensaje
              </button>
              
              <div id="submit-status" className="text-sm text-center hidden" role="status" aria-live="polite">
                {/* Status messages will be shown here */}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Información de contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-primary-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Dirección</h3>
                    <p className="text-secondary-600">
                      {brandConfig.company.address.street}<br />
                      {brandConfig.company.address.city}, {brandConfig.company.address.postal}<br />
                      {brandConfig.company.address.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-primary-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Teléfono</h3>
                    <p className="text-secondary-600">
                      <a href={`tel:${brandConfig.company.phone}`} className="hover:text-primary-600">
                        {brandConfig.company.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-primary-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    <p className="text-secondary-600">
                      <a href={`mailto:${brandConfig.company.email}`} className="hover:text-primary-600">
                        {brandConfig.company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Ubicación
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7419.033986444114!2d-0.4718794880246371!3d39.47154991250412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60506cb7ae0cd1%3A0xd016cde47aa0dfa7!2sMetalls%20Del%20Camp!5e1!3m2!1ses!2ses!4v1755773228820!5m2!1ses!2ses" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Metalls Del Camp"
                >
                </iframe>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Horario de atención
              </h2>
              <div className="space-y-2 text-secondary-700">
                <div className="flex justify-between">
                  <span>De Lunes a Viernes</span>
                  <span>8:30 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados, Domingos y Festivos</span>
                  <span className="text-secondary-500">Cerrado</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
