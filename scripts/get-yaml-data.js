const { readdirSync, readFileSync } = require('fs');
const path = require('path');

const yaml = require('js-yaml');

const data = {}
const dataDir = path.join(process.cwd(), 'data/');
const dataFiles =
	readdirSync(dataDir)
	.map(file => path.join(dataDir, file))
	.map(file => {
		const {name} = path.parse(file);
		data[name] = yaml.safeLoad(readFileSync(file));
	});

module.exports = data;
