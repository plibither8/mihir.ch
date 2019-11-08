// Lazy-load offscreen images
import 'lazysizes';
import { render } from 'timeago.js'

// Expand the "Psst! ++" button
const psstButton = document.querySelector('#heading button.expand');
psstButton.addEventListener('click', () => {
	psstButton.nextElementSibling.classList.remove('nodisplay');
	psstButton.remove();
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

// Activity
function lastfm(data) {
	const musicCard = document.querySelector('#music');
	const list = musicCard.querySelector('ul');
	const scrobbledTracks = musicCard.querySelector('p span.stat');

	scrobbledTracks.innerText = data.totalPlayCount.toLocaleString();

	let maxCount;
	for (const [index, artist] of data.topFive.entries()) {
		if (index === 0) {
			maxCount = artist.playcount;
		}

		const listItem = document.createElement('li');
		listItem.innerHTML = `
				<p class='rank'>${index + 1}.</p>
				<img src='${artist.image}' alt='${artist.name} image'>
				<p class='name'><a href='${artist.url}' target='_blank' rel='noopener'>${artist.name}</a><span class='count'>${artist.playcount}</span></p>
			`;

		const percentage = artist.playcount / maxCount * 100;
		listItem.querySelector('p.name').style.background =
			`linear-gradient(90deg, rgba(179, 157, 219, ${1 - index * 0.15}) ${percentage}%, transparent ${percentage}%)`;

		list.append(listItem);
	}
}

function wakatime(data) {
	const progCard = document.querySelector('#programming');
	const list = progCard.querySelector('ul');
	const [totalTime, dailyAverage] = [...progCard.querySelectorAll('p span.stat')];

	totalTime.innerText = data.total;
	dailyAverage.innerText = data.average;

	let maxCount;
	for (const [index, lang] of data.languages.entries()) {
		if (index === 0) {
			maxCount = lang.percent;
		}

		const listItem = document.createElement('li');
		listItem.innerHTML = `
				<p class='rank'>${index + 1}.</p>
				<p class='name'>${lang.name}<span class='count'>${lang.time}</span></p>
			`;

		const percentage = lang.percent / maxCount * 100;
		listItem.querySelector('p.name').style.background =
			`linear-gradient(90deg, ${lang.color}88 ${percentage}%, transparent ${percentage}%)`;

		list.append(listItem);
	}

	// Create ghost list items so that 5 list items appear
	for (let i = 0; i < 5 - Object.keys(data.languages).length; i++)  {
		const listItem = document.createElement('li');
		list.append(listItem);
	}
}

let hackernewsStart = 0;

function hackernews(data, start) {
	const hnCard = document.querySelector('#hn');
	const list = hnCard.querySelector('ol');

	for (const [index, item] of data.slice(start, start + 5).entries()) {
		const listItem = document.createElement('li');
		listItem.innerHTML = item.type === 'comment' ?
			`
				<div class='comment'>${item.text}</div>
				<p class='sub'>
					${new Date(item.time).toLocaleDateString()}
					&middot;&nbsp;
					<a href='https://news.ycombinator.com/item?id=${item.id}' target='_blank' rel='noopener'>show on hn</a>
				</p>
			` :
			`
				<a href='${item.link}' target='_blank' rel='noopener'>${item.title}</a>
				<p class='sub'>
					${new Date(item.time).toLocaleDateString()}
					&middot;&nbsp;
					<a href='https://news.ycombinator.com/item?id=${item.id}' target='_blank' rel='noopener'>show on hn</a>
				</p>
			`;

		list.append(listItem);
	}

	if (start === 0) {
		const button = hnCard.querySelector('button');
		button.addEventListener('click', () => {
			hackernews(data, hackernewsStart);
		});
	}

	hackernewsStart += 5;
}

// get data
(async () => {
	const GIST_URL = 'https://api.github.com/gists/ea3780e4764315e354bc3f0655c81814';

	const activityData =
		await fetch(GIST_URL)
		.then(res => res.json())
		.then(res => {
			const lastUpdated = document.createElement('p');
			lastUpdated.innerHTML = `Last updated <span datetime="${res.updated_at}"></span>.`;
			lastUpdated.classList.add('update');

			const activitySection = document.querySelector('#activity');
			const activityPara = activitySection.querySelector('p');
			activitySection.insertBefore(lastUpdated, activityPara);

			render(lastUpdated.querySelector('span'));

			return Object.values(res.files)[0];
		})
		.then(res => JSON.parse(res.content));

	lastfm(activityData.lastfm);
	wakatime(activityData.wakatime);
	hackernews(activityData.hackernews, hackernewsStart);

	const gallery = document.querySelector('#activity div.gallery');
	gallery.classList.remove('gallery--loading');
})();
