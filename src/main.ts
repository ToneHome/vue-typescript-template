import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

import plugins from '@/plugins'


import lodash from 'lodash'

declare global {
  const _: typeof lodash
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: Object,
    $axios: any,
    $bus: any
  }
}

Vue.use(plugins)


Vue.config.productionTip = false


export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


