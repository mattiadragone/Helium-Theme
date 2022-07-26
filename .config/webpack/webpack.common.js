const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')
const sass = require('node-sass')
const glob = require('glob')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
  stats: 'minimal',
  entry: glob.sync('./src/scripts/**/*.js').reduce((acc, path) => {
    const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, '../../assets/'),
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '../../src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {

        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      ... (() => {
        const rules = []

        const loaders = [
          { test: /\.(css|postcss)$/i },
          { test: /\.s[ac]ss$/i, loader: 'sass-loader' },
          { test: /\.less$/i, loader: 'less-loader' },
          { test: /\.styl$/i, loader: 'stylus-loader' }
        ]

        loaders.forEach((element, index) => {
          rules.push({
            test: element.test,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: require(path.resolve(__dirname, '../postcss.config.js'))
                }
              }
            ]
          })

          if (element.loader) rules[index].use.push(element.loader)
        })

        return rules
      })()
    ]
  },
  optimization: {
    removeEmptyChunks: true,
  },
  plugins: [
    /*
    new CopyPlugin([{
      from:  './src/styles/*.css',
      to: './[name].css',
      flatten: true,
      /*transform(content, path) {
        const result = sass.renderSync({
          file: path,
        });
        return result.css.toString();
      },
    }
  ]),*/
    /**
     * don't clean files with the 'static' keyword in their filename
     * docs: https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!*static*']
    }),
    /**
     * docs: https://webpack.js.org/plugins/mini-css-extract-plugin
     */
    new MiniCssExtractPlugin({
      filename: '../assets/[name].css'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    }),
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new OptimizeCSSAssetsPlugin({
      })
      
  ]
}