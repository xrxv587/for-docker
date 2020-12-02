const crypto = require('crypto');

const md5Sign = (data) => crypto.createHash('md5').update(data).digest('hex');
const authUser = (whiteList) => {
	return (req, res, next) => {
		const temp = req.path.split('.');
		const suffix = temp[temp.length - 1];
		const isStaticfile = suffix === 'js' || suffix === 'css' || suffix === 'html';
		if (whiteList && whiteList.includes(req.url) || req.session.user || isStaticfile) {
			next();
		} else {
			res.status(401).send('未登录');
		}
	}
}

module.exports = { md5Sign, authUser };