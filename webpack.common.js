const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');

const config = (env, args) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: [
                '@babel/syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif|ttf|svg|woff2)$/,
          use: [
            {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name].[ext]',
                      context: path.resolve(__dirname, 'src'),
                      useRelativePaths: true
                  }
              }
          ]
      },
      ]
    },
    resolve: {
      alias: {
          'src': srcPath
      }
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: './index.html'
      })
    ]
  }
}

module.exports = config
