/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "openprocessing-usercontent.s3.amazonaws.com",
      "media.fxhash.xyz",
      "gateway.fxhash.xyz",
    ],
  },
};

module.exports = nextConfig;
