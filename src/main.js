import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import md5 from 'js-md5';

import qs from 'qs'
import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.config.devtools = true
axios.defaults.baseURL="/api";
Vue.prototype.$md5 = md5;

new Vue({
  render: h => h(App),
}).$mount('#app')
