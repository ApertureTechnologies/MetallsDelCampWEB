/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    // Habilitar características experimentales si es necesario
    // typedRoutes: true, // Deshabilitado temporalmente
  },
  images: {
    unoptimized: true,
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
  // Headers y redirects manejados por el hosting provider (Vercel, Netlify, etc.)
  // Para sitios estáticos, estos se configuran en vercel.json, _headers, _redirects, etc.
};

export default nextConfig;
