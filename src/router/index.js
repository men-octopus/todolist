import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pink',
    name: 'Pink',
    component: () => import('../views/Pink.vue')
  },
  {
    path: '/aqua',
    name: 'Aqua',
    component: () => import('../views/Aqua.vue')
  },
  {
    path: '/mint',
    name: 'Mint',
    component: () => import('../views/Mint.vue')
  },
  {
    path: '/lemon',
    name: 'Lemon',
    component: () => import('../views/Lemon.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
