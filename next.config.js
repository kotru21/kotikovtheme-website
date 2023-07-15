/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { // for tailwind ico
        dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };

module.exports = nextConfig
