const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    stylus: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')
      ],
    },
  })
}
