// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Essential production settings
  compress: true,
  productionBrowserSourceMaps: false, // Disable for smaller builds
  optimizeFonts: true,
  reactStrictMode: true,
  
  // Image optimization (if using next/image)
  images: {
    domains: [], // Add your image domains here
    minimumCacheTTL: 60,
  },
  
  // Enable proper source map generation
  experimental: {
    outputFileTracing: true,
  },
};

export default nextConfig;