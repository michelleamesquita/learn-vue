
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'
import PubNubVue from 'vue-pubnub';

import VueMaterial from 'vue-material'
Vue.config.productionTip = false
Vue.use(VueMaterial) 


Vue.use(VueRouter)

import Home from './components/Home.vue'
import Login from './components/Login.vue'

const routes = [
  {path : '/Home',component: Home},
  {path : '/Login',component: Login}

]

Vue.use(PubNubVue, {
  subscribeKey: 'pub-c-25aca95c-c423-422c-bceb-86662801ea3e',
  publishKey: 'sub-c-503200de-e79f-11e8-8495-720743810c32'
});

const router = new VueRouter({
  routes
})

new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
