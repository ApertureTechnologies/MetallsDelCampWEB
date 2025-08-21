'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeaderLogo } from './Logo';

interface NavigationItem {
  name: string;
  href: string;
  submenu?: {
    name: string;
    href: string;
  }[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation: NavigationItem[] = [
    { 
      name: 'Inicio', 
      href: '/' 
    },
    {
      name: 'Maquinaria',
      href: '/maquinarias',
    },
    {
      name: 'Residuos',
      href: '/residuos',
    },
    {
      name: 'Tramitación Medioambiental',
      href: '/tramitacion-medioambiental',
    },
    {
      name: 'Clientes',
      href: '/clientes',
    },
        {
      name: 'Nosotros',
      href: '/proyectos',
      submenu: [
        { name: 'Proyectos', href: '/proyectos' },
        { name: 'Empresa', href: '/empresa' },
        { name: 'Comerciales', href: '/comerciales' }
      ]
    },
    { 
      name: 'Atención Personalizada', 
      href: '/contacto' 
    }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-black text-white">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium"
      >
        Saltar al contenido principal
      </a>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <HeaderLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        {item.name}
                        <svg 
                          className="ml-1 h-4 w-4 transition-transform duration-200"
                          style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
                          activeDropdown === item.name 
                            ? 'opacity-100 visible transform translate-y-0' 
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-primary-400 hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Submenu */}
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-white hover:text-primary-400 hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
