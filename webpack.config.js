'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SizePlugin = require('size-plugin');

module.exports = (env, argv) => ({
	devtool: 'sourcemap',
	devServer: {
		contentBase: [
			'./dist',
			'./src'
		],
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
			title: 'Mihir Chaturvedi',
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
