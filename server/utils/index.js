const crypto = require('crypto');

const md5Sign = (data) => crypto.createHash('md5').update(data).digest('hex');
const authUser = (whiteList) => {
	return (req, res, next) => {
		if (whiteList && whiteList.includes(req.url) || req.session.user) {
			next();
		} else {
			res.status(401).send('未登录');
		}
	}
}

module.exports = { md5Sign, authUser };