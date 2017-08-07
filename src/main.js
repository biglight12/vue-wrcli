import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import "./assets/css/base.css"
import 'muse-ui/dist/muse-ui.css'
import torem from "./assets/font/font.js"
import Axios from 'axios'
Vue.use(MuseUI)

Vue.prototype.$http = Axios 
new Vue({
  el: '#app',
  render: h => h(App)
})
