const fs = require('fs')
const path = require('path')
const app = require('fastify')({ trustProxy: true })
const fetch = require('node-fetch')

// use the .env file
require('dotenv').config()

const { TG_BOT_NAME, TG_BOT_SECRET, BAD_IP } = process.env;

async function sendToTelegram(message) {
	await fetch(`https://tg.mihir.ch/${TG_BOT_NAME}`, {
		method: 'POST',
		body: JSON.stringify({
			text: message,
			secret: TG_BOT_SECRET
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

app.register(require('fastify-static'), {
	root: path.join(__dirname, 'dist')
})

app.get('/', async (request, response) => {
	const {headers, query, ip} = request

	if (ip === BAD_IP) {
		const telegramMessage = `*⚠️ AJAY IS HERE!*\n*Page URL:* https://mihir.ch`
		await sendToTelegram(telegramMessage)
		const stream = fs.createReadStream('dist/hello.html?ip='+BAD_IP)
		return response.type('text/html').send(stream)
	}

	const stream = fs.createReadStream('dist/index.html')
	return response.type('text/html').send(stream)
})

app.get('/:page', async (request, response) => {
	const {headers, query, ip, params} = request

	if (ip === BAD_IP) {
		const telegramMessage = `*⚠️ AJAY IS HERE!*\n*Page URL:* https://mihir.ch`
		await sendToTelegram(telegramMessage)
		const stream = fs.createReadStream('dist/hello.html?ip='+BAD_IP)
		return response.type('text/html').send(stream)
	}

	const { page } = params
	const pagesDir = path.join(__dirname, 'pages/')
	const distDir = path.join(__dirname, 'dist/')
	const distFiles = fs.readdirSync(distDir).filter(f => !fs.statSync(path.join(distDir, f)).isDirectory())

	// if page exists
	if (fs.readdirSync(pagesDir).includes(page)) {
		const stream = fs.createReadStream(`dist/${page}.html`)
		return response.type('text/html').send(stream)
	}

	// if file exists
	if (distFiles.includes(page)) {
		const stream = fs.createReadStream(`dist/${page}`)
		return response.type('text/html').send(stream)
	}

	// else send 404
	const stream = fs.createReadStream('dist/404.html')
	return response.type('text/html').send(stream)
})

app.listen(process.env.PORT || 5000, err => {
	if (err) throw err
})
