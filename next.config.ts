import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  ...(isGithubActions ? { basePath: "/me", assetPrefix: "/me" } : {}),
};

export default nextConfig;
