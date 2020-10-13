import Vue from 'vue'
import Router from 'vuerouter'
import Aarea from '../vue/pages/A.vue'
import Barea from '../vue/pages/B.vue'
import Carea from '../vue/pages/C.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{ 
			path: '/A',
			component: Aarea,
			children: [
				{
					path: 'C',
					component: Carea
				}
			]
		},
		{ 
			path: '/B', 
			component: Barea
		}
	]
});