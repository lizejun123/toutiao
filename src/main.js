import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

import Vant from 'vant'
import 'vant/lib/index.css'

// 移动端适配 rem
import 'amfe-flexible'

// 全局注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
