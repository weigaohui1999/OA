import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
require('@/utils/CustomUtil')

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '@/styles/index.scss'
import "@/assets/theme.less";
import "@/assets/global.css";
import "@/assets/iconfont/iconfont.css"
import '@/icons' // icon
import "./permission"

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.BASE_URL = 'http://' + (process.env.NODE_ENV === 'development-' ? "192.168.31.220" : "192.168.31.220");

Vue.prototype.$isNotEmpty = function(obj){
  return (obj !== undefined && obj !== null && obj !== '' && obj !== 'null')
}

Vue.prototype.$getDefalut = function(obj, key, df){
  return (obj === undefined || key === undefined || !this.$isNotEmpty(obj[key])) ? df : obj[key];
}

Vue.prototype.$deepCopy = function (obj){return JSON.parse(JSON.stringify(obj))}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
