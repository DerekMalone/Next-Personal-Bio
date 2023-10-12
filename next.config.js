/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dingomalone/image/upload",
  },
};

module.exports = nextConfig;
