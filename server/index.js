const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const utils = require('./utils');

const config = require('./config/config');
const whiteList = require('./config/whiteList');

const app = express();
app.use(session({
	secret: 'xrx',
	resave: false,
	saveUninitialized: false,
	cookie: { 
		secure: false,
		maxAge: 60000
	},
	store: new RedisStore({
			client: redis.createClient({
			host: config.redisIp,
			db: config.USER_SESSION_DB
		})
	})
}));
// 开发环境设置为不限制，生产环境不涉及跨域问题
if (process.env.NODE_ENV === 'development') {
	app.use(require('cors')());
}
app.use(utils.authUser(whiteList));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.use('/user', require('./routes/login'));

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