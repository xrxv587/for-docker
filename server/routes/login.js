const Router = require('express').Router;
const user = require('../config/user.json');

const router = Router();
router.post('/login', async (req, res) => {
	const { account, password } = req.body;
	try {
		if (!!!account) throw '缺少用户名';
		if (!!!password) throw '缺少密码';
		if (account !== user.account || password !== user.password) throw '用户名或密码错误';
		req.session.user = req.body;
		res.send('success');
	} catch (error) {
		res.status(500).json({ code: 500, error });
	}
});

module.exports = router;