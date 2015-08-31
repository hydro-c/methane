module.exports = {

  // entry for js building
  entry: './src/main.js',

  // the only js file we need after building for now
  output: {
    path:     'build/',
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        // chain loader:        Right to Left
        // babel handles for:   ES6, JSX
        test:     /\.js$/,
        loaders:  'react-hot!babel',
        exclude:  /node_modules/
      },
      {
        test:     /\.scss$/,
        loader:   'style!css!sass',
      },
      {
        test:     /\.css$/,
        loader:   ["style-loader", "css-loader", "autoprefixer-loader"]
      },
      {
        test:     /\.(png|jpg)$/,
        loader:   'url-loader?limit=8192'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
