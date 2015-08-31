// var path = require('path');

module.exports = {

  // entry for js building
  entry: [
    //'webpack-dev-server/client', // WebpackDevServer host and port
    //'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/main.js' // Your appʼs entry point
  ],

  // devServer: {
  //   contentBase: "./build",
  //   noInfo: true, //  --no-info option
  //   hot: true,
  //   inline: true
  // },

  // the only js file we need after building for now
  output: {
    path:     './build',
    filename: 'app.js'
  },

  // TODO: Add sourse map, url loader
  // https://github.com/jtangelder/sass-loader

  module: {
    loaders: [
      {
        // chain loader:        Right to Left
        // babel handles for:   ES6, JSX
        test:     /\.js$/,
        loaders:  ['react-hot', 'babel-loader'],
        exclude:  /node_modules/
      },
      {
        test:     /\.scss$/,
        loader:   ['style-loader', 'css-loader', 'sass-loader'],
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
