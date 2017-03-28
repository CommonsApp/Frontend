var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['jsx-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/style.css',
      allChunks: true
    })
  ],
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'public/[name].js'
  }
}