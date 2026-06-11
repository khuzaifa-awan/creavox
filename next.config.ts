// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// ------safari------------


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   scrollRestoration: false,
  // },
  allowedDevOrigins: ['192.168.1.5'],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;