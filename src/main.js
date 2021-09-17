import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
// import Vue from 'vue'

// createApp(App).use(router)(store).mount('#app')
// Vue.use(Vuex)

const createapp = myapp => {
  const app = createApp(myapp)
  app.use(store)
  app.use(router) 
  return app
}
createapp(App).mount('#app')