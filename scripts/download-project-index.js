const {writeFile} = require('fs').promises
const fetch = require('node-fetch')
const path = require('path')

const RAW_FILE_URL = 'https://raw.githubusercontent.com/plibither8/index/master/index.yaml'
const filePath = path.join(__dirname, '../data/projectIndex.yml')

module.exports = async function() {
	const content = await fetch(RAW_FILE_URL).then(res => res.text())
	await writeFile(filePath, content)
}
