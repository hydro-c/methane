module.exports = {
  entry: './js/entry.js',
  output: {
    path:     'public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // chain loader: Right to Left
        test:     /\.js$/,
        loaders:  ['react-hot', 'jsx', 'babel'],
        exclude:  /node_modules/
      },
      {
        test:     /\.scss$/,
        loader:  ["style", "css", "sass"]
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
