import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors stopping the build
  },
  /* other config options */
};

export default nextConfig;
