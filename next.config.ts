import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // case screenshots are served at one quality, re-encoded from the already-compressed webp
    qualities: [85],
  },
};

export default nextConfig;
