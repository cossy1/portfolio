/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    externalDir: true,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
