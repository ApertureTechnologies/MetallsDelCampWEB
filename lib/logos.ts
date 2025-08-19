// Configuración de logos de Metalls del Camp
// Incluye todas las variantes disponibles y sus usos recomendados

export const LOGO_CONFIG = {
  // Logo completo con texto (ideal para footers, páginas principales)
  completo: {
    small: {
      src: '/brand/logos/completo/logo-100x71.png',
      width: 100,
      height: 71,
      recommended: 'Badges, iconos pequeños'
    },
    medium: {
      src: '/brand/logos/completo/logo-150x106.png',
      width: 150,
      height: 106,
      recommended: 'Footers, sidebars'
    },
    large: {
      src: '/brand/logos/completo/logo-300x212.png',
      width: 300,
      height: 212,
      recommended: 'Hero sections, páginas principales'
    },
    xlarge: {
      src: '/brand/logos/completo/logo-500x353.png',
      width: 500,
      height: 353,
      recommended: 'Impresión, materiales de alta resolución'
    }
  },

  // Logo horizontal (ideal para headers, barras de navegación)
  horizontal: {
    small: {
      src: '/brand/logos/horizontal/logo-243x33.png',
      width: 243,
      height: 33,
      recommended: 'Headers móviles, navegación compacta'
    },
    medium: {
      src: '/brand/logos/horizontal/logo-433x58.png',
      width: 433,
      height: 58,
      recommended: 'Headers desktop, barras de navegación'
    },
    large: {
      src: '/brand/logos/horizontal/logo-546x73.png',
      width: 546,
      height: 73,
      recommended: 'Banners, headers grandes'
    }
  },

  // Logo blanco (ideal para fondos oscuros)
  blanco: {
    small: {
      src: '/brand/logos/blanco/logo-120x14.png',
      width: 120,
      height: 14,
      recommended: 'Headers oscuros compactos'
    },
    medium: {
      src: '/brand/logos/blanco/logo-300x35.png',
      width: 300,
      height: 35,
      recommended: 'Headers oscuros, footers oscuros'
    },
    large: {
      src: '/brand/logos/blanco/logo-500x58.png',
      width: 500,
      height: 58,
      recommended: 'Banners oscuros, heroes con fondo oscuro'
    }
  },

  // Solo símbolo (ideal para favicons, iconos)
  simbolo: {
    xsmall: {
      src: '/brand/logos/simbolo/simbolo-80x77.png',
      width: 80,
      height: 77,
      recommended: 'Iconos pequeños, avatares'
    },
    small: {
      src: '/brand/logos/simbolo/simbolo-150x144.png',
      width: 150,
      height: 144,
      recommended: 'Iconos medianos, notificaciones'
    },
    medium: {
      src: '/brand/logos/simbolo/simbolo-300x289.png',
      width: 300,
      height: 289,
      recommended: 'Iconos grandes, loading screens'
    },
    large: {
      src: '/brand/logos/simbolo/simbolo-500x481.png',
      width: 500,
      height: 481,
      recommended: 'App icons, materiales de impresión'
    }
  },

  // Logos de compatibilidad (rutas originales)
  legacy: {
    main: '/brand/logo-metalls-del-camp.png', // Apunta al logo completo 300x212
    aperture: '/brand/aperture-logo.png'
  }
};

// Función helper para obtener el logo más apropiado según el contexto
export function getLogo(
  type: 'completo' | 'horizontal' | 'blanco' | 'simbolo',
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium'
) {
  const logoType = LOGO_CONFIG[type];
  if (!logoType) return null;
  
  // Si el tamaño no existe para ese tipo, usar el más cercano
  const availableSizes = Object.keys(logoType);
  const targetSize = availableSizes.includes(size) ? size : 'medium';
  
  return logoType[targetSize as keyof typeof logoType] || null;
}

// Configuración de favicons
export const FAVICON_CONFIG = {
  main: '/app/favicon.ico',
  png16: '/favicon-16x16.png',
  png48: '/brand/Logo Metalls/favicon/favicon 48 x 48.ico'
};
