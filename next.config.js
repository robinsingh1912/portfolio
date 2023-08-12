/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['media.licdn.com'],
  },
};

module.exports = nextConfig;
