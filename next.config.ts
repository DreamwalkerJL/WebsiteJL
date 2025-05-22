import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // turn off the new CSS optimizer so it won’t try to load lightningcss.linux-x64-gnu.node
    optimizeCss: false,
  },
}

export default nextConfig
