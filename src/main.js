import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 全局引入echarts
import * as echarts from 'echarts'
// 引入二次封装的四种请求
import { getRequest, postRequest, putRequest, deleteRequest } from '@/plugins/request'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

// axios经过Promise二次封装后的四个请求放入到Vue的prototype上
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.deleteRequest = deleteRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
