// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../components/DashBoard.vue'
import SharePage from '../components/SharePage.vue'
const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/share',
    name: 'SharePage',
    component: SharePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
