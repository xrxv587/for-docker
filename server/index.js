const app = require('express')();
const fs = require('fs');
const redisClient = require('./redis');

app.get('/', (req, res) => {
	const html = fs.readFileSync('./index.html', 'utf-8');
	res.send(html);
});
app.get('/set', async (req, res) => {
	try {
		let r = await redisClient.testSet('test', {a: 1});
		res.send(r);	
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.listen(8888, () => {
	console.log('server listen on 8888');
})