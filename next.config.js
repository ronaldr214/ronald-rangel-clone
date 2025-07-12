/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Vercel, NO necesitamos output: 'export'
  images: {
    domains: ['todoweb.pro'], // Para las imágenes de WordPress
    unoptimized: false // Vercel optimiza automáticamente
  },
  // Optimizaciones para Vercel
  experimental: {
    optimizeCss: true,
  },
  // Headers para mejor rendimiento
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig