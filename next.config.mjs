/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js
// next.config.mjs

export default {
    images: {
      domains: [], // Add any external domains you want to load images from, if any
      deviceSizes: [320, 420, 768, 1024, 1200],
      disableStaticImages: false,
    },
    nextConfig,
  };
