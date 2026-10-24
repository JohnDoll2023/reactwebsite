import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //devIndicators: false
  experimental: {
    agentUpgrade: "security",
  },
  allowedDevOrigins: ["192.168.0.13", "127.0.0.1", "localhost"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
