'use strict';

const path = require('path');
const { readdirSync, statSync } = require('fs');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const SizePlugin = require('size-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

// Get all that YAML data
const data = require('./scripts/get-yaml-data');

// Get all page roots
const pagesDir = path.join(__dirname, 'pages/');
const pages = readdirSync(pagesDir).filter(f => statSync(path.join(pagesDir, f)).isDirectory());
const pagesToExclude = ['404', 'index'];

// Site paths for sitemap generator - exclude some pages
const sitePaths = [
	'/',
	...pages.filter(p => !pagesToExclude.includes(p)).map(p => '/' + p)
];

// webpack entry object
const entryObj = {};
pages.map(page => {
	entryObj[page] = `./pages/${page}/${page}`
});

module.exports = (env, argv) => ({
	devtool: 'sourcemap',
	devServer: {
		contentBase: [
			'./dist',
			'./'
		],
		hot: true,
		writeToDisk: true,
		watchContentBase: true
	},
	stats: 'errors-only',
	entry: entryObj,
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
				from: 'assets',
				to: 'assets'
			}, {
				from: 'static',
				to: ''
			}
		]),
		new HtmlWebpackPlugin({
			template: './pages/index/index.pug',
			projects: data.projects,
			networks: data.networks,
			navigation: data.navigation,
			filename: 'index.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './pages/blog/blog.pug',
			navigation: data.navigation,
			filename: 'blog.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: './pages/404/404.pug',
			navigation: data.navigation,
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
