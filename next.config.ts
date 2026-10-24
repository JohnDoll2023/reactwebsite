import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //devIndicators: false
  experimental: {
    agentUpgrade: "security",
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
