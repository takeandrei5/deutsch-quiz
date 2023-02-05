// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

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
};
export default config;
