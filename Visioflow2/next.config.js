/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,   // Disable double-mount in dev (breaks GSAP single-run effects)
  async rewrites() {
    return [
      {
        source: '/.well-known/apple-developer-merchantid-domain-association',
        destination: '/api/apple-pay-verify',
      },
    ]
  },
}
module.exports = nextConfig
