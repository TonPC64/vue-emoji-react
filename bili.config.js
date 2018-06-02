var VuePlugin = require('rollup-plugin-vue')
module.exports = {
  babel: {
    babelrc: false
  },
  outDir: 'public',
  banner: true,
  format: ['umd-min'],
  css: true,
  plugins: [VuePlugin.default({ css: true })]
}
