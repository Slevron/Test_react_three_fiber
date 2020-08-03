const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Pokeyball Three.js',
        template: path.join('templates', 'index.html'),
      }),
      new HtmlWebpackInjector(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      port: 3000
    },
};
