const _merge = require('lodash/merge');
const cardStackConfig = require('./components/css-tricks-cards-stack/tailwind.custom');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ..._merge(cardStackConfig),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
