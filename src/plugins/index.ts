import axios from './axios'
import api from './api'
import eventbus from './eventbus'

export default {
  install: (Vue: any) => {
    // 挂载实例
    Vue.prototype.$ajax = axios
    Vue.prototype.$api = api
    Vue.prototype.$bus = eventbus
  }
}
