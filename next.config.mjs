// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
import analyzer from "@next/bundle-analyzer";

/** @type {import("next/dist/lib/load-custom-routes").Redirect[]} */
const redirects = [
  {
    source: "/",
    destination: "/levels",
    permanent: true,
  },
  {
    source: "/levels/:level",
    destination: "/levels/:level/topics",
    permanent: true,
  },
];

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => redirects,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    domains: ["imagedelivery.net"],
    imageSizes: [96, 384],
    deviceSizes: [640, 1200, 1920],
  },
  pageExtensions: ["tsx", "page.ts"],
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(config);
