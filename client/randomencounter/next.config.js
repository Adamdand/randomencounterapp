module.exports = {
  async redirects() {
    return [
      {
        source: "/products/:slug*",
        destination: "/category-products/:slug*",
        permanent: true,
      },
      {
        source: "/collections/:slug*",
        destination: "/category-products/:slug*",
        permanent: true,
      },
      {
        source: "/collections/vendors/products/:slug*",
        destination: "/category-products/:slug*",
        permanent: true,
      },
      {
        source: "/example",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: "asset",
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qa-aem.rumi.ca",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aem.rumi.ca",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  distDir: ".next",
  output: "standalone",
};
