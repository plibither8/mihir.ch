const {mkdir} = require('fs').promises;
const {createWriteStream} = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const kebab = str => str.split(' ').join('-').toLowerCase();

const main = async data => {
	const ARTISTS_IMG_DIR = path.join(__dirname, '../assets/img/artists');
	await mkdir(ARTISTS_IMG_DIR, {recursive: true});

	for (const [index, artist] of data.activityData.lastfm.topFive.entries()) {
		const kebabedName = kebab(artist.name);
		const dest = `${ARTISTS_IMG_DIR}/${kebabedName}.jpg`;

		const res = await fetch(artist.image);

		await new Promise(async (resolve, reject) => {
			const fileStream = await createWriteStream(dest);
			res.body.pipe(fileStream);
			res.body.on('error', reject);
			fileStream.on('finish', resolve);
		});	
	}

	return data;
}

module.exports = main;
