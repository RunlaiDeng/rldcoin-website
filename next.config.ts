import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/get-started", destination: "/about", permanent: true },
      { source: "/individuals", destination: "/about", permanent: true },
      { source: "/businesses", destination: "/how-it-works", permanent: true },
      { source: "/wallets", destination: "/you-need-to-know", permanent: true },
      {
        source: "/payments",
        destination: "/how-it-works#payment-states",
        permanent: true,
      },
      { source: "/vocabulary", destination: "/how-it-works", permanent: true },
      {
        source: "/participate",
        destination: "/developers#participate",
        permanent: true,
      },
      { source: "/run-a-node", destination: "/developers", permanent: true },
      { source: "/applications", destination: "/about", permanent: true },
      { source: "/roadmap", destination: "/network", permanent: true },
      { source: "/research", destination: "/resources", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default config;
