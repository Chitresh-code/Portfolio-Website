/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'imgur.com',
    ],
  },
};

module.exports = nextConfig;
