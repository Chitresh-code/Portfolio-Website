/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: [
      'github.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'imgur.com',
    ],
  },
};

module.exports = nextConfig;
