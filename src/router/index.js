import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'



/*
*
*  Components
*
*/
import Home from '@/pages/home'
import AnotherPage from '@/pages/other-page'


Vue.use(VueHead)
Vue.use(Router)



/**
 * Declare Variable
 */

const router = new Router({
	mode: 'history',
	routes: [
		{
      path: '/',
      name: 'home',
      component: Home
    },
		{
      path: '/other',
      name: 'other',
      component: AnotherPage
    }
	]
})



/**
 * Router Guards
 */


router.beforeEach(function (to, from, next) { 
  window.scrollTo(500, 0);
  next();
});




router.afterEach((to, from) => {

})

export default router
