/**
 * Options for how we load and compile .vue files are within
 *
 */

// const csso = require('csso');
const cssnext = require('cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // postcss: [cssnext()],
  // sass: {       // if sass needs to search for vars, etc.
  //   includePaths: ['src/scss']
  // },
  // loaders: {    // NOTE: this overwrites all default loaders (ie. just plain <style> tags)
  //   // scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
  //   css: ExtractTextPlugin.extract({
  //     use: 'css-loader',
  //     fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
  //   })
  // }
}
