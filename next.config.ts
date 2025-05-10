/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel deployments (remove if using static export)
  output: process.env.VERCEL ? 'standalone' : undefined,
  
  // Essential production settings
  compress: true,
  reactStrictMode: true,
  
  // Image optimization (if using next/image)
  images: {
    domains: [], // Add your image domains here
    minimumCacheTTL: 60,
  },
  
  // Enable proper source map generation
  experimental: {
    // outputFileTracing is now automatic in newer Next.js versions
    // Remove if causing errors
  }
};

module.exports = nextConfig;