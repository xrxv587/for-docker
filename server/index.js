const app = require('express')();
const fs = require('fs');

app.get('/', (req, res) => {
	const html = fs.readFileSync('./index.html', 'utf-8');
	res.send(html);
})

app.listen(8888, () => {
	console.log('server listen on 8888');
})