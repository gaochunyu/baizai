// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuecookies from 'vue-cookies'
import './assets/css/marker.scss'

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(Vuecookies);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  components: { App },
  template: '<App/>'
})
