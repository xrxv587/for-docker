const developement = {
	redisIp: '127.0.0.1',
	db: 12,
	USER_SESSION_DB: 11
}
const production = {
	redisIp: 'test-redis',
	db: 12,
	USER_SESSION_DB: 11
}
const config = process.env.NODE_ENV === 'development' ? developement : production;
module.exports = {
	...config
}