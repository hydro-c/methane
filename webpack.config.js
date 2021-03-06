// from here:
// https://github.com/gaearon/react-hot-boilerplate

var path = require('path');
var webpack = require('webpack');

module.exports = {

	devtool: 'eval',

	entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],

	output: {
      path:				 path.join(__dirname, 'public', 'build'),
      filename:		'app.js',
      publicPath:	'/assets/'
	},

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
              loader:   ['react-hot', 'style-loader', 'css-loader', 'sass-loader'],
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
	},

	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
