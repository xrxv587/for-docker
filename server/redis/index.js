const redis = require('redis');
const { promisify } = require('util');
const config = require('../config/config');

const redisClient = redis.createClient({
	host: config.redisIp,
	db: config.db
});
redisClient.on('connect', () => {
	console.log('redis is ready ^_^');
});
redisClient.on('error', (err) => {
	console.error('redis client error: ', err);
});

const asyncGet = promisify(redisClient.get).bind(redisClient);
const asyncSet = promisify(redisClient.set).bind(redisClient);

/**
 * 
 * @param {string} key 存储key
 * @param {any} val 存储value
 * @param {number} expire 过期时间（秒）
 */
const redisSet = async (key, val, expire) => {
	let res = await asyncSet(key, val);
	if (expire) redisClient.expire(key, expire);
	return res;
}
const redisGet = async (key, val) => {
	let res = await asyncGet(key);
	return res;
}

module.exports = { redisSet, redisGet };
