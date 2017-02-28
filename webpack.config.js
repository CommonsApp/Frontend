module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader',
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    app: './app/app.js'
  },
  output: {
    filename: 'public/[name].js'
  }
}