module.exports = {
  entry: './src/entry.js',
  output: {
    path:     'public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // chain loader: Right to Left
        // babel handles: ES6, JSX
        test:     /\.js$/,
        loaders:  ['react-hot', 'babel-loader'],
        exclude:  /node_modules/
      },
      {
        test:     /\.scss$/,
        loader:  ["style", "css-loader", "sass-loader"]
      },
      {
        test:     /\.css$/,
        loader:   ["style-loader", "css-loader"]
      },
      {
        test:     /\.(png|jpg)$/,
        loader:   'url-loader?limit=8192'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
