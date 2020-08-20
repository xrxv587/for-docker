const express = require('express');
const fs = require('fs');
const redisClient = require('./redis');

const app = express();
app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res, next) => {
	if (req.url !== '/favicon.ico') {
		console.log('接收到请求===>' + req.url);
	}
	next();
});
app.get('/', (req, res) => {
	const html = fs.readFileSync('./dist/index.html', 'utf-8');
	res.send(html);
});
app.get('/testSet', async (req, res) => {
	try {
		let r = await redisClient.testSet('test', JSON.stringify({a: 1}));
		res.send(r);	
	} catch (error) {
		res.status(500).send(error.message);
	}
});
app.get('/testGet', async (req, res) => {
	try {
		let r = await redisClient.testGet('test');
		res.send(r);	
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.listen(8888, () => {
	console.log('server listen on 8888');
})