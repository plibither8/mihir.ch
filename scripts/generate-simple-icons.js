const {writeFile, mkdir} = require('fs').promises
const path = require('path')

const simpleIcons = require('simple-icons')

const kebab = str => str.toLowerCase().split(' ').join('-')

module.exports = async networks => {
	const NETWORKS_IMG_DIR = path.join(__dirname, '../assets/img/networks')
	await mkdir(NETWORKS_IMG_DIR, {recursive: true})

	// store the promises of writing files
	const writeFilePromises = []

	networks.forEach((network, index) => {
		const icon = simpleIcons.get(network.slug || network.name)
		const filePath = NETWORKS_IMG_DIR + '/' + kebab(network.name) + '.svg'
		const fileContent = icon.svg.replace('<path d=', `<path fill="#${icon.hex}" d=`)

		writeFilePromises.push(writeFile(filePath, fileContent))
	})

	await Promise.all(writeFilePromises)
}
