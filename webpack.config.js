/**
 *  npm run dev -> dev
 *      webpack -> build production
 */

module.exports = {

	entry: [
	    './src/main.js'
	],

	output: {
      path: './public/build/',
      filename: 'app.js',
      publicPath: '/assets/'
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
	}
};
