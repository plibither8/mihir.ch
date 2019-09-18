'use strict';

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const SizePlugin = require('size-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

// Site paths for sitemap generator
const sitePaths = [
	'/',
	'/blog'
];

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
		index: './src/pages/index/index',
		blog: './src/pages/blog/blog',
		'404': './src/pages/404/404'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'assets/js/[name].js',
		publicPath: '',
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
				from: 'src/assets',
				to: 'assets'
			}, {
				from: 'src/static',
				to: ''
			}
		]),
		new HtmlWebpackPlugin({
			template: './src/pages/index/index.pug',
			projects: require('./src/data/projects.json'),
			networks: require('./src/data/networks.json'),
			navigation: require('./src/data/navigation.json'),
			filename: 'index.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/blog/blog.pug',
			navigation: require('./src/data/navigation.json'),
			filename: 'blog.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/404/404.pug',
			navigation: require('./src/data/navigation.json'),
			filename: '404.html',
			inject: false
		}),
		new ImageminPlugin(),
		new ImageminWebpWebpackPlugin({
			config:[
				{
					test: /assets\/img\/projects/
				}
			],
			detailedLogs: true
		}),
		new SitemapPlugin('https://mihir.ch', sitePaths)
	],
	resolve: {
		extensions: [
			'.js'
		]
	},
	optimization: {
		concatenateModules: true,
	}
});
