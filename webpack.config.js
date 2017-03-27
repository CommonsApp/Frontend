module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['jsx-loader', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'public/[name].js'
  }
}