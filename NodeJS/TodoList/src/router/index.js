import { createRouter, createWebHistory } from 'vue-router'
import TodoListContainer from '../views/TodoListContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoListContainer
    }
  ]
})

export default router
