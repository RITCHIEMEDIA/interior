/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lynneduncandesign.online' }],
        destination: 'https://www.lynneduncandesign.online/:path*',
        permanent: true,
      },
    ];
  },

export default nextConfig
