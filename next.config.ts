import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@stream-io/node-sdk",
      "ws",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/meetings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
