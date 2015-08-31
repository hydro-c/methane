/**
 * Working on it...
 */
 
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssExtractTextPlugin = new ExtractTextPlugin("main-[hash].css");

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
    "process.env": {
        "NODE_ENV": JSON.stringify('production'),
        "CLIENT": 'true',
        "SERVER": 'false'
    }
});

module.exports = {
	resolve: {
	    extensions: ['', '.js']
	},

	entry: [
	    './src/main.js'
	],
	output: {
	    path: path.join(__dirname, '/build'),
	    filename: 'app.js'
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
	},
	plugins: [
		definePlugin,
		new webpack.optimize.OccurenceOrderPlugin(true),
		cssExtractTextPlugin,
		new webpack.optimize.UglifyJsPlugin({
		    beautify: true,
		    verbose: false
		}),
		function () {
		    this.plugin("done", function (stats) {
		        var jj = stats.toJson({
		            errorDetails: false,
		            reasons: false,
		            source: false,
		            chunks: false,
		            modules: false,
		            children: false
		        });
		    });
		}
	]
};
