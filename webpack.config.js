'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = (env, argv) => ({
	devtool: 'sourcemap',
	devServer: {
		contentBase: './dist',
		hot: true,
		watchContentBase: true
	},
	stats: 'errors-only',
	entry: {
		index: './src/index'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.pug/,
			use: 'pug-loader'
		}, {
			test: /\.styl/,
			use: [
				'style-loader',
				'css-loader',
				'stylus-loader'
			]
		}]
	},
	plugins: [
		new SizePlugin(),
		new CopyWebpackPlugin([
			{
				from: 'src/static',
				to: 'static'
			}
		]),
		new HtmlWebpackPlugin({
			title: 'Last.fm Tab',
			template: './src/index.pug'
		})
	],
	resolve: {
		extensions: [
			'.js'
		]
	},
	optimization: {
		// Without this, function names will be garbled and enableFeature won't work
		concatenateModules: true,
	}
});
