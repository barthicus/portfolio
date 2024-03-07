/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Typed routes don't work with Turbopack yet (next dev --turbo)
    typedRoutes: false,
    ppr: true
  }
}

module.exports = nextConfig
