/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Habilitar características experimentales si es necesario
    // typedRoutes: true, // Deshabilitado temporalmente
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  // Optimizaciones de producción
  poweredByHeader: false,
  compress: true,
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  // Redirects si es necesario
  async redirects() {
    return [
      {
        source: '/servicios/asesoramiento-tecnico',
        destination: '/tramitacion-medioambiental',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
