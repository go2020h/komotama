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
  }
}

module.exports = nextConfig
