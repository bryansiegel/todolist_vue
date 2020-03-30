import Vue from 'vue'
// import VueRouter from 'vue-router'
// eslint-disable-next-line
import App from './App.vue'

// Vue.use(VueRouter)

// const Home = {
//   template: '<div>Home</div>'
// }

// const About = {
//   template: '<div>About</div>'
// }

// const router = new VueRouter({
//   routes: [
//     { path: '', component: Home },
//     { path: '/about', component: About }
//   ]
// });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   router
// }).$mount('#app') 
