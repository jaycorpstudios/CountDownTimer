const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (env, args) => {
  const commonConfig = common(env, args);
  return merge(commonConfig, {
    output: {
      filename: '__[name].[contenthash].js',
      chunkFilename: '__[name].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        name: true,
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            enforce: true
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].css'})
    ]
  })
}

module.exports = config
