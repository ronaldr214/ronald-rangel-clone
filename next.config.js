/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'https://todoweb.pro/CMS'] // Cambia por tu dominio de WordPress
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig