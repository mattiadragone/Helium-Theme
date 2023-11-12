module.exports = {
  // Add your postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['last 2 versions', '> 5%']
    },
    'cssnano': {}
  }
};
