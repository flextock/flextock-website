import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for classic Firebase Hosting (same pattern as merchant-ui).
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.36"],
  // redirects() is not supported with output:"export"; see firebase.json hosting redirects.
};

export default nextConfig;
