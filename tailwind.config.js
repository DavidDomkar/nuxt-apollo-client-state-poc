// const plugin = require('tailwindcss/plugin');

const colors = {
  transparent: 'transparent',
};

module.exports = {
  theme: {
    colors,
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
};
