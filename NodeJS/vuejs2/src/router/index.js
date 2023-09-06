import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adoption',
      name: 'adoption',
      component: () => import('../views/AdoptionView.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue')
    }
  ]
})

export default router
