'use client';

import { useState } from 'react';
import brandConfig from '../../../brand.config';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    asunto: '',
    mensaje: '',
    privacidad: false,
    website: '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor, introduce tu nombre';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduce un email válido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }
    
    if (!formData.asunto) {
      newErrors.asunto = 'Por favor, selecciona un asunto';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Por favor, introduce tu mensaje';
    }
    
    if (!formData.privacidad) {
      newErrors.privacidad = 'Debes aceptar la política de privacidad';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          asunto: '',
          mensaje: '',
          privacidad: false,
          website: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      // Error logging removed for production
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4 lg:mb-6">
            Contacto
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-secondary-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestros servicios o para solicitar un presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form responsive */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px' }}
                aria-hidden="true"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[44px] px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent text-sm sm:text-base"
                    aria-describedby="nombre-error"
                  />
                  <div id="nombre-error" className={`mt-1 text-sm text-red-600 ${errors.nombre ? '' : 'hidden'}`} role="alert">
                    {errors.nombre || 'Por favor, introduce tu nombre'}
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[44px] px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent text-sm sm:text-base"
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className={`mt-1 text-sm text-red-600 ${errors.email ? '' : 'hidden'}`} role="alert">
                    {errors.email || 'Por favor, introduce un email válido'}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full min-h-[44px] px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent text-sm sm:text-base"
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
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full min-h-[44px] px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent text-sm sm:text-base"
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
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-[44px] px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent text-sm sm:text-base"
                  aria-describedby="asunto-error"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="presupuesto">Solicitar presupuesto</option>
                  <option value="informacion">Información sobre servicios</option>
                  <option value="proyecto">Consulta sobre proyecto</option>
                  <option value="otro">Otro</option>
                </select>
                <div id="asunto-error" className={`mt-1 text-sm text-red-600 ${errors.asunto ? '' : 'hidden'}`} role="alert">
                  {errors.asunto || 'Por favor, selecciona un asunto'}
                </div>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus:border-transparent resize-vertical text-sm sm:text-base"
                  placeholder="Cuéntanos más detalles sobre tu consulta o proyecto..."
                  aria-describedby="mensaje-error"
                />
                <div id="mensaje-error" className={`mt-1 text-sm text-red-600 ${errors.mensaje ? '' : 'hidden'}`} role="alert">
                  {errors.mensaje || 'Por favor, introduce tu mensaje'}
                </div>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacidad"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleInputChange}
                  required
                  className="mt-1 min-w-[16px] min-h-[16px] text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 border-secondary-300 rounded"
                  aria-describedby="privacidad-error"
                />
                <label htmlFor="privacidad" className="ml-2 text-sm text-secondary-700">
                  He leído y acepto la{' '}
                  <a href="/legal/privacidad" className="text-primary-600 hover:text-primary-700 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded">
                    política de privacidad
                  </a>{' '}
                  *
                </label>
              </div>
              <div id="privacidad-error" className={`text-sm text-red-600 ${errors.privacidad ? '' : 'hidden'}`} role="alert">
                {errors.privacidad || 'Debes aceptar la política de privacidad'}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[44px] bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby="submit-status"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              
              <div id="submit-status" className={`text-sm text-center ${submitStatus === 'idle' ? 'hidden' : ''}`} role="status" aria-live="polite">
                {submitStatus === 'success' && (
                  <div className="text-green-600">¡Mensaje enviado correctamente! Te responderemos pronto.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information responsive */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">
                Información de contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 text-sm sm:text-base">Dirección</h3>
                    <p className="text-secondary-600 text-sm sm:text-base">
                      {brandConfig.company.address.street}<br />
                      {brandConfig.company.address.city}, {brandConfig.company.address.postal}<br />
                      {brandConfig.company.address.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 text-sm sm:text-base">Teléfono</h3>
                    <p className="text-secondary-600 text-sm sm:text-base">
                      <a href={`tel:${brandConfig.company.phone}`} className="hover:text-primary-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded">
                        {brandConfig.company.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 text-sm sm:text-base">Email</h3>
                    <p className="text-secondary-600 text-sm sm:text-base break-all">
                      <a href={`mailto:${brandConfig.company.email}`} className="hover:text-primary-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded">
                        {brandConfig.company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps responsive */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">
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

            {/* Business Hours responsive */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6">
                Horario de atención
              </h2>
              <div className="space-y-2 text-secondary-700 text-sm sm:text-base">
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
