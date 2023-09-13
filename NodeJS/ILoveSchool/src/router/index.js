import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const sessionStorage= window.sessionStorage;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/CelebrationMsg.vue'),
      beforeEnter: (to, from, next) => { //to: to에 해당하는 라우트객체 다음에이동
        // from : 현재 라우터로 오기이전 라우트 
        // next : next에 전달되는 인자에 따라 다름 비었으면 현재, ('/') 이거는 루트
          if( sessionStorage.getItem('user_id') !== null  )
            return next();
          alert('로그인해라')
          //sessionStorage.removeItem()  삭제 하는거- logout에 사용

      }
    }
  ]
})

export default router
