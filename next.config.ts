import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cr2.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:
          "wkncdn.com/newx/assets/build/img/logos/mobile_logo.16f3a81b5.svg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sa-east-1.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
