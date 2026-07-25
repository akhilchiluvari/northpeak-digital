import type { NextConfig } from "next";

// Static export: the whole site pre-renders to plain HTML/CSS/JS in /out,
// which Netlify serves from its CDN. No server runtime for a one-pager.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
