import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //devIndicators: false
};

module.exports = {
  output: 'export',
  trailingSlash: true,      // /about -> /about/index.html, which plays nicely with S3
  images: { unoptimized: true }, // the default image optimizer needs a server
};

export default nextConfig;
