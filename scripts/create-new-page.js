const path = require('path');
const {
	writeFile,
	mkdir
} = require('fs').promises;

const PAGES_DIR = path.join(__dirname, '../pages');
const PAGE_NAME = process.argv[2];

const sanitize = str => str.replace(/\n\t\t/g, '\n').trim() + '\n';

const fileContents = {
	// No default JS content, only required as an entry file for Webpack
	js: "",

	// Customisation required for each page
	pug: sanitize(`
		//- Head generator mixin
		include ../../templates/head.pug
		//- Navigation
		include ../../templates/nav.pug

		doctype html

		html(lang="en")

			head
				//- Generate head
				+head(title="${PAGE_NAME[0].toUpperCase() + PAGE_NAME.slice(1)} · Mihir Chaturvedi")

				// Styles
				link(rel="stylesheet" href="/assets/css/${PAGE_NAME}.css")

			body

				+nav()

				main

					section

				//- Footer
				include ../../templates/footer.pug
	`),

	styl: sanitize(`
		@require "../../stylesheets/base"
		@import "../../stylesheets/nav"
		@import "../../stylesheets/footer"
	`)
};

const main = async () => {
	await mkdir(path.join(PAGES_DIR, PAGE_NAME)); // create directory

	// create the files
	for (const [extension, content] of Object.entries(fileContents)) {
		await writeFile(
			path.join(PAGES_DIR, `${PAGE_NAME}/${PAGE_NAME}.${extension}`),
			content
		);
	}
};

(async () => {
	await main();
})();
