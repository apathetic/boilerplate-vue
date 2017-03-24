/**
 * Options for how we load and compile .vue files are within
 *
 */

// const csso = require('csso');
const cssnext = require('cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  postcss: [cssnext()],
  loaders: {    // NOTE: this overwrites all default loaders (ie. just plain <style> tags)
    scss: (isProd) ?
      ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader', 'postcss-loader'],
        fallback: 'vue-style-loader'
      })
      :
      'vue-style-loader!css-loader!sass-loader'
  }
}
