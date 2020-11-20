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

app.listen(8888, () => {
	console.log('server listen on 8888');
})