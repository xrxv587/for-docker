const redis = require('redis');
const { promisify } = require('util');

const redisClient = redis.createClient({
	db: 12
});
const asyncGet = promisify(redisClient.get).bind(redisClient);
const asyncSet = promisify(redisClient.set).bind(redisClient);

const testSet = async (key, val) => {
	let res = await asyncSet(key, val);
	return res;
}

module.exports = { testSet };
