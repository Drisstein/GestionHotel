/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // ignore les erreurs ESLint au build
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
