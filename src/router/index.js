import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/productFunction',
    name: 'productFunction',
    component: () =>
      import('@/views/productFunction.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
