var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('src/'),
	entry: {
		main: './app/index.js',
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'js/bundle.[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader:'babel-loader',
				query: {
                	presets: ['es2015', 'react', 'stage-3']
            	}
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style!','css?sourceMap!postcss?sourceMap!sass?sourceMap', {path:'css/'})
			}
		]
	},
	plugins: [
	],
	resolve : {
		root: path.resolve(__dirname),
		extensions: ['', '.js', '.jsx', '.es6']
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};