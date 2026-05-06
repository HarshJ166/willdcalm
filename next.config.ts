/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ THIS FIXES YOUR ERROR
  },
};

module.exports = nextConfig;