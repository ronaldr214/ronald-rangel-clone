
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Para que funcione con hostinger
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module