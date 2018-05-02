// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import i18n from './locales'

import App from './App'

import '@/assets/plugins/scripts.js'


sync(store, router)
const lang = store.state.language
if (lang) {
	i18n.locale = lang
}


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
