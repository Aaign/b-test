import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from '../http.js'

Vue.prototype.$http = http;
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
