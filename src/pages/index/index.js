// Lazy-load offscreen images
import 'lazysizes';

// Expand the "Psst! ++" button
const introExpandButton = document.querySelector('#intro button.expand');
introExpandButton.addEventListener('click', () => {
	introExpandButton.nextElementSibling.classList.remove('nodisplay');
	introExpandButton.remove();
});

// Expand/collapse projects' "++" buttons
const projectCards = document.querySelectorAll('#projects .card');
for (const card of projectCards) {
	const details = card.querySelector('div.details');
	const button = card.querySelector('button');

	button.addEventListener('click', () => {
		details.classList.toggle('nodisplay');
		button.innerHTML = button.innerHTML == '++' ? '--' : '++';
	});
}

// Recent Activity
const GIST_URL = 'https://api.github.com/gists/ea3780e4764315e354bc3f0655c81814';

function lastfm(data) {
	const musicCard = document.querySelector('#music');
	const list = musicCard.querySelector('ul');
	const scrobbledTracks = musicCard.querySelector('p span.stat');

	scrobbledTracks.innerText = data.totalPlayCount;

	let maxCount;
	for (const [index, artist] of data.topFive.entries()) {
		if (index === 0) {
			maxCount = artist.playcount;
		}

		const listItem = document.createElement('li');
		listItem.innerHTML = `
				<span class='rank'>${index + 1}.</span>
				<img src='${artist.image}'>
				<span class='name'>${artist.name}</span>
				<span class='count'>${artist.playcount}</span>
			`;

		const percentage = artist.playcount / maxCount * 100;
		listItem.querySelector('span.name').style.background =
			`linear-gradient(90deg, var(--accent-color-0) ${
				percentage}%, transparent ${percentage}%)`;

		list.append(listItem)
	}
}

function wakatime(data) {
	const progCard = document.querySelector('#programming');
	const list = progCard.querySelector('ul');
	const [totalTime, dailyAverage] = [...progCard.querySelectorAll('p span.stat')];

	totalTime.innerText = data.total;
	dailyAverage.innerText = data.average;

	for (const [index, lang] of data.languages.entries()) {
		const listItem = document.createElement('li');
		listItem.innerHTML = `
				<span class='rank'>${index + 1}.</span>
				<span class='name'>${lang.name}</span>
				<span class='count'>${lang.time}</span>
			`;

		listItem.querySelector('span.name').style.background =
			`linear-gradient(90deg, ${lang.color}88 ${lang.percent}%, transparent ${lang.percent}%)`;

		list.append(listItem)
	}
}

// get data
(async () => {
	const activityData =
		await fetch(GIST_URL)
		.then(res => res.json())
		.then(res => Object.values(res.files)[0])
		.then(res => JSON.parse(res.content));

	lastfm(activityData.lastfm);
	wakatime(activityData.wakatime);
})();
