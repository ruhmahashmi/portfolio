// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ NEW required plugin name for v4+
    autoprefixer: {},
  },
};
