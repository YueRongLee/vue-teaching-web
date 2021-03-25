// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//想要使用甚麼外部套件，可以在這裡 import
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

//import完套件記得要 Vue.use(該套件名稱)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
//程式入口點，建一個Vue的實例
new Vue({
  //掛入 id=app 的DOM元素
  el: '#app',
  //使用router
  router,
  //指定App.vue模板為主頁面
  components: { App },
  template: '<App/>'
})
