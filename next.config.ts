import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qi31.qodeinteractive.com",
      },
      {
        protocol: "https",
        hostname: "ashtanga.qodeinteractive.com",
      },
    ],
  },
};

export default nextConfig;
