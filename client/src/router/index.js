import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		name: 'personal',
		path: '/personal',
		component: () => import('../views/personal/Personal')
	},
	{
		path: 'login',
		path: '/login',
		component: () => import('../views/login/Login')
	},
	{
		path: 'index',
		path: '/',
		component: () => import('../views/index/Index')
	}
];

const router = new VueRouter({
	routes,
});
router.beforeEach((to, from, next) => {
	if(document.cookie.includes('session') || to.path === '/login') {
		next();
	} else {
		next({ path: '/login' });
	}
});
router.onError(e => {
	console.log(e);
});

export default router;
