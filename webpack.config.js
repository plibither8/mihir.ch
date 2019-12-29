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

// Get all page roots
const pagesDir = path.join(__dirname, 'pages/');
const pages = readdirSync(pagesDir).filter(f => statSync(path.join(pagesDir, f)).isDirectory());

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

module.exports = async (env, argv) => {
	// Download project-index file and save
	await require('./scripts/download-project-index')();
	// Get all that YAML data
	const data = require('./scripts/get-yaml-data');

	// Site paths for sitemap generator - exclude some pages
	const sitemapExcludes = ['404', 'index'];
	const sitemapPaths = [
		'/',
		...pages.filter(p => !sitemapExcludes.includes(p)).map(p => '/' + p)
	];

	// Webpack entry object
	const entryObj = {};
	pages.map(page => {
		entryObj[page] = `./pages/${page}/${page}`
	});

	// HTML Webpack plugin generator
	const htmlPluginBaseOptions = page => ({
		template: `./pages/${page}/${page}.pug`,
		navigation: data.navigation,
		filename: page + '.html',
		inject: false
	});

	const htmlPluginExcludes = ['index', 'projects']
	const htmlPlugins = pages
		.filter(page => !htmlPluginExcludes.includes(page))
		.map(page => new HtmlWebpackPlugin(htmlPluginBaseOptions(page)));

	return {
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
				use: [{
					loader: 'pug-loader'
				}]
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
				...htmlPluginBaseOptions('index'),
				projects: data.projects,
				networks: data.networks,
				activity: await getRecentActivity(),
				dateFormat: require('dateformat')
			}),
			new HtmlWebpackPlugin({
				...htmlPluginBaseOptions('projects'),
				projectIndex: data.projectIndex
			}),
			...htmlPlugins,
			new ImageminPlugin(),
			new ImageminWebpWebpackPlugin({
				config:[
					{
						test: /assets\/img\/projects/
					}
				],
				detailedLogs: true
			}),
			new SitemapPlugin('https://mihir.ch', sitemapPaths)
		],
		resolve: {
			extensions: [
				'.js'
			]
		},
		optimization: {
			concatenateModules: true,
		}
	}
};
