const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin') // included in webpack 5, no need to add to package.json
const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




module.exports = merge(common, {
  mode: 'production',
  stats: 'detailed',
  stats: {
    cachedModules: false,
    env: true,
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [ '@babel/preset-env' ],
          plugins: [ '@babel/plugin-transform-runtime' ]
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
    minimizer: [
      /**
       * docs: https://webpack.js.org/plugins/terser-webpack-plugin
       */
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@license/i // preserve license comments
          }
        },
        extractComments: false
      }),
      /**
       * docs: https://webpack.js.org/plugins/css-minimizer-webpack-plugin
       */
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cssoMinify,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        statsFilename: '../stats/report.json',
        reportFilename: '../stats/report.html',
        analyzerPort: 4000,
        openAnalyzer: true
      })
    ]
  }
})