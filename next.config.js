/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]
    return config
  },
  env: {
    DISCORD_URL: 'https://discord.gg/yZ8ZuGXJKu'
  },
  async rewrites() {
    return [
      {
        source: '/youtube',
        destination: 'https://komotama-y.vercel.app/youtube'
      },
      {
        source: '/youtube/:path*',
        destination: 'https://komotama-y.vercel.app/youtube/:path*'
      }
    ]
  }
}

module.exports = nextConfig
