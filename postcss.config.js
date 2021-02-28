const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const plugins =
  process.env.NODE_ENV === 'production'
    ? [tailwind, autoprefixer, cssnano]
    : [tailwind];

module.exports = { plugins };
