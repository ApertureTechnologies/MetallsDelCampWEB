import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const installations = [
    {
      address: "C/ Serra d'Espada, naves 8 y 10 - 46960 Aldaia",
      location: "(Valencia)"
    },
    {
      address: "C/ de la Horta nº 4, Polígono el Coscollar - 46960",
      location: "Aldaia (Valencia)"
    },
    {
      address: "Ctra. de Lillo a Tembleque, S/N - 45770 El Romeral",
      location: "(Toledo)"
    }
  ];

  const contactInfo = [
    {
      type: "whatsapp",
      label: "WhatsApp: 637 718 795",
      href: "https://wa.me/34637718795"
    },
    {
      type: "phone",
      label: "Tel: 96 150 11 10",
      href: "tel:+34961501110"
    },
    {
      type: "email",
      label: "recogidas@metallsdelcampslu.es",
      href: "mailto:recogidas@metallsdelcampslu.es"
    }
  ];

  const legalLinks = [
    { name: 'Aviso legal', href: '/aviso-legal' },
    { name: 'Política de privacidad', href: '/politica-privacidad' },
    { name: 'Política de Cookies', href: '/politica-cookies' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Instalaciones */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Direcciones de Instalaciones</h3>
            <div className="space-y-3 sm:space-y-4">
              {installations.map((installation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg 
                    className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm sm:text-base">
                    <p className="text-gray-300 leading-relaxed">{installation.address}</p>
                    <p className="text-gray-400">{installation.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contáctanos</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {contact.type === 'whatsapp' && (
                    <div className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  )}
                  {contact.type === 'phone' && (
                    <div className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  )}
                  {contact.type === 'email' && (
                    <div className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <a 
                    href={contact.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 rounded break-all"
                    aria-label={`Contactar por ${contact.type === 'whatsapp' ? 'WhatsApp' : contact.type === 'phone' ? 'teléfono' : 'email'}`}
                  >
                    {contact.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Logo y Créditos */}
          <div className="flex flex-col items-center lg:items-end space-y-6 sm:space-y-8 md:col-span-2 lg:col-span-1">
            {/* Logo de Metalls del Camp */}
            <div className="text-center lg:text-right">
              <Logo 
                type="blanco" 
                size="large" 
                className="h-10 sm:h-12 w-auto mb-2"
                alt="Metalls del Camp"
              />
            </div>
            
            {/* Made by Aperture */}
            <div className="text-center lg:text-right">
              <p className="text-xs text-gray-400 mb-3">Made by</p>
              <div className="flex flex-col items-center lg:items-end space-y-2">
                <Image
                  src="/brand/Logo Metalls/LogoAperture.png"
                  alt="Aperture Technologies"
                  width={400}
                  height={100}
                  className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-90 hover:brightness-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>and</span>
                  <Link 
                    href="https://gonagb.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gonagb.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 gap-4">
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400 rounded"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-gray-400">
                © {currentYear} Metalls del Camp. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
