'use strict';

// Local modules
const path = require('path');
const { readdirSync, statSync } = require('fs');

// Webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const SizePlugin = require('size-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

// Other modules
const fetch = require('node-fetch');

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

// get recent-activity.json
const getRecentActivity = async () => {
	const GIST_API_URL = 'https://api.github.com/gists/ea3780e4764315e354bc3f0655c81814';
	const remoteData = await fetch(GIST_API_URL).then(res => res.json());
	const content = JSON.parse(remoteData.files['recent-activity.json'].content);

	return {
		activityData: content,
		lastUpdated: remoteData.updated_at
	};
}

module.exports = async (env, argv) => ({
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
			activity: await getRecentActivity(),
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
