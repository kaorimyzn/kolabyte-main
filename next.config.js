const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});


module.exports = withBundleAnalyzer({
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  redirects: require("./next-redirect"),
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: process.env.IS_VERCEL_ENV === "false",
  },
});