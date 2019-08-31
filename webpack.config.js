'use strict';

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const SizePlugin = require('size-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => ({
	devtool: 'sourcemap',
	devServer: {
		contentBase: [
			'./dist',
			'./src'
		],
		hot: true,
		writeToDisk: true,
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
		new WriteFilePlugin(),
		new CopyWebpackPlugin([
			{
				from: 'src/static/assets',
				to: 'static'
			}, {
				from: 'src/static/pages',
				to: ''
			}
		]),
		new HtmlWebpackPlugin({
			title: 'Mihir Chaturvedi',
			template: './src/index.pug',
			projects: require('./src/data/projects.json'),
			networks: require('./src/data/networks.json'),
			navigation: require('./src/data/navigation.json')
		}),
		new ImageminPlugin(),
		new ImageminWebpWebpackPlugin({
			config:[
				{
					test: /static\/assets\/img\/projects/
				}
			],
			detailedLogs: true
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
