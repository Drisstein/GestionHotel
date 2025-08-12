/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    turbo: false
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;