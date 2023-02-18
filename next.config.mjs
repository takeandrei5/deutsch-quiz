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
];

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => redirects,
  images: {
    domains: ["imagedelivery.net"],
  },
  pageExtensions: ["tsx", "page.ts"],
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(config);
