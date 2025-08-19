/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
     reactStrictMode: true,
  swcMinify: true,
    
  },
  
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
