import Vue from 'vue'
import App from './App.vue'

// 路由层
import router from "./router";

// UI层
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 数据层
import Vuex from 'vuex'
Vue.use(Vuex)

// 网络请求层
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
