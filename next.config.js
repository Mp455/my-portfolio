/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
        hostname: "media.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
