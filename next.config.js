/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Typoed routes don't work with Turbopack yet (next dev --turbo)
    typedRoutes: false,
    ppr: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

module.exports = nextConfig
