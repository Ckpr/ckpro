import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
axios.defaults.timeout = 5000
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// axios.defaults.baseURL = ''

/*
axios设置
*/
// axios.defaults.withCredentials = true
// Vue.http.options.credentials = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
