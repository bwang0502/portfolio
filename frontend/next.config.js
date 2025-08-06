// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  experimental: {
    // disable SWC's ESM externals handling so every import goes through Webpack/SWC
    esmExternals: false,
  },
  webpack(config) {
    // (your PostCSS override, if still needed)
    config.module.rules.forEach((rule) => {
      if (!rule.oneOf) return;
      rule.oneOf.forEach((r) => {
        const uses = Array.isArray(r.use) ? r.use : r.use ? [r.use] : [];
        uses.forEach((u) => {
          if (
            u &&
            typeof u === 'object' &&
            u.loader &&
            u.loader.includes('postcss-loader')
          ) {
            u.options = u.options || {};
            u.options.postcssOptions = require('./postcss.config.js');
          }
        });
      });
    });
    return config;
  },
};

module.exports = nextConfig;

