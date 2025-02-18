import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio.corecmsapi.com"
      },
    ],
  },
};

export default nextConfig;
