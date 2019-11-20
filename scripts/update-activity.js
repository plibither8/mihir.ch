const Octokit = require('@octokit/rest')
const fetch = require('node-fetch')
const jsyaml = require('js-yaml')

// get environment vars
const {
	// GitHub Gists
	GIST_ID,
	GITHUB_TOKEN,

	// Spotify
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,

	// Last.fm
	LASTFM_KEY,
	LASTFM_USER,

	// WakaTime
	WAKATIME_KEY
} = process.env


// HACKER NEWS
async function hackernews() {
	const HN_FAVES_URL = 'https://hn-faves.mihir.ch/plibither8?all=true'
	const faves = await fetch(HN_FAVES_URL)
		.then(res => res.json())
		.then(res => Object.values(res).flat())
	console.log('done: hacker news faves')

	const HN_API_URL = 'http://hn.algolia.com/api/v1/items'
	let count = 1
	for (const [index, item] of faves.entries()) {
		const details = await fetch(`${HN_API_URL}/${item.id}`).then(res => res.json())
		faves[index] = {
			id: details.id,
			link: details.url,
			time: details.created_at_i * 1000,
			text: details.text,
			title: details.title
		}
		console.log(`done item: ${count++} / ${faves.length}`)
	}
	console.log('done: hacker news fave dates')

	// sort comments and stories by time
	faves.sort((a, b) => a.time < b.time ? 1 : -1)

	return faves
}


// LAST.FM
async function lastfm() {
	// First setup spotify access token and function
	// to get artist images
	const authorization = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')
	const SPOTIFY_ACCESS_TOKEN =
		await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic ' + authorization
			},
			body: 'grant_type=client_credentials'
		})
		.then(res => res.json())
		.then(res => res.access_token)
	console.log('done: spotify access token')

	// function to get the artist image from search
	async function getArtistImageFromSpotify(artistName) {
		const searchUrl =
			'https://api.spotify.com/v1/search?type=artist&q=' +
			encodeURIComponent(artistName)
		const searchResults = await fetch(searchUrl, {
			headers: {
				'Authorization': 'Bearer ' + SPOTIFY_ACCESS_TOKEN
			}
		}).then(res => res.json())
		const artist = searchResults.artists.items[0]
		const artistImage = artist.images[2].url // 300x300
		return artistImage
	}

	const LASTFM_API_BASE =
		'http://ws.audioscrobbler.com/2.0/?format=json' +
		'&user=' + LASTFM_USER +
		'&api_key=' + LASTFM_KEY

	// create last.fm api url and get data
	const LASTFM_API_TOP_ARTISTS = LASTFM_API_BASE + '&method=user.gettopartists&period=7day'
	const data = await fetch(LASTFM_API_TOP_ARTISTS).then(res => res.json())
	console.log('done: last.fm top artists')

	// the top five most listened to artists this week
	const topFive = []

	// select the top five artists and their data
	for (let i = 0; i < 5; i++) {
		const {
			name,
			playcount,
			url
		} = data.topartists.artist[i]
		const image = await getArtistImageFromSpotify(name)
		topFive.push({
			name,
			playcount,
			image,
			url
		})
	}
	console.log('done: spotify artist images')

	// Get total tracks scrobbled
	const LASTFM_API_WEEKLY_TRACKS = LASTFM_API_BASE + '&method=user.getweeklytrackchart'
	let weeklyTrackList = await fetch(LASTFM_API_WEEKLY_TRACKS)
		.then(res => res.json())
	weeklyTrackList = weeklyTrackList.weeklytrackchart.track
	console.log('done: last.fm weekly track chart')

	let totalPlayCount = 0
	for (const track of weeklyTrackList) {
		totalPlayCount += Number(track.playcount)
	}

	return {
		totalPlayCount,
		topFive
	}
}


// WAKATIME
async function wakatime() {
	// this will hold all the color data
	let colorData = await fetch('https://rawgit.com/github/linguist/master/lib/linguist/languages.yml')
		.then(res => res.text())
		.then(text => jsyaml.safeLoad(text))
	console.log('done: github linguist colors')

	// get a language color data
	async function getLanguageColor(name) {
		// default color
		let color = '#cccccc'
		// important checks
		if (colorData[name] && colorData[name].color) {
			color = colorData[name].color
		}

		return color
	}

	// wakatime api url
	const WAKATIME_API = 'https://wakatime.com/api/v1/users/current/stats/last_7_days'
	const authorization = Buffer.from(WAKATIME_KEY).toString('base64')

	// get json response of stats
	const stats =
		await fetch(WAKATIME_API, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + authorization
			}
		})
		.then(res => res.json())
		.then(res => res.data)
	console.log('done: wakatime stats')

	// stats that i want
	const filteredStats = {
		total: stats.human_readable_total,
		average: stats.human_readable_daily_average,
		languages: [] // top five langs
	}

	for (let i = 0; filteredStats.languages.length < 5 && i < stats.languages.length; i++) {
		const lang = stats.languages[i]
		if (lang.name === 'Other') {
			continue
		}

		filteredStats.languages.push({
			name: lang.name,
			percent: lang.percent,
			time: lang.text,
			color: await getLanguageColor(lang.name)
		})
	}

	return filteredStats
}

// actual function that runs it all
async function main() {
	const octokit = new Octokit({ auth: `token ${GITHUB_TOKEN}` }) // Instantiate Octokit
	const gist = await octokit.gists.get({ gist_id: GIST_ID }) // get the gist

	// get final gist content
	const gistContent = {
		lastfm: await lastfm(),
		wakatime: await wakatime(),
		hackernews: await hackernews()
	}

	// Get original filename to update that same file
	const filename = Object.keys(gist.data.files)[0]
	await octokit.gists.update({
		gist_id: GIST_ID,
		files: {
			[filename]: {
				filename,
				content: JSON.stringify(gistContent, null, '  ')
			}
		}
	})
	console.log('done: update gist')
}

(async () => {
	await main()
})()
