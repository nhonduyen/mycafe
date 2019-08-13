import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'simplebar'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
