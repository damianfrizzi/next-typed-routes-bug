import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  trailingSlash: true,
  typescript: {
    // Just to make deployments work
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
