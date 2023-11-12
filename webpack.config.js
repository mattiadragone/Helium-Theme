// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    entry: glob.sync('./_src/scripts/**/*.js').reduce((acc, path) => {
        const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
        acc[entry] = path;
        return acc;
      }, {}),
      output: {
        filename: (pathData) => {
            const folderName = path.basename(path.dirname(pathData.chunk.entryModule.resource));
            return `./${folderName}.[name].js`;
        },
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: (pathData) => {
            const folderName = path.basename(path.dirname(pathData.chunk.entryModule.resource));
            return `./${folderName}.[name].css`;
          },
        }
            
        ),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
