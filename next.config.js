/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'tu-wordpress-domain.com'] // Cambia por tu dominio de WordPress
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Deshabilita rutas dinámicas problemáticas
  generateStaticParams: async () => {
    return []
  }
}

module.exports = nextConfig