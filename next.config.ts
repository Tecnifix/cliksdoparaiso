import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Wire Tailwind CSS v4 into the Turbopack CSS pipeline.
  // @tailwindcss/turbopack processes every *.css file through the v4 engine,
  // enabling @import "tailwindcss" and @theme {} in globals.css.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
