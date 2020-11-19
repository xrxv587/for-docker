import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: '/personal',
		component: () => import('../views/personal/Personal'),
	},
	{
		path: '/',
		component: () => import('../views/index/Index')
	}
];

const router = new VueRouter({
	routes,
});

export default router;
