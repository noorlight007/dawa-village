import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (smallest), WebP as fallback.
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
