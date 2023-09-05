// src / router.js

import { createWebHistory, createRouter } from 'vue-router';
const routes = [
    {
        path:"/",
        name:"MyHome",
        component : () => import('@/components/MyHome.vue')
    },
    {
        path:"/login",
        name:"SdmLogin",
        component :() => import('@/components/SdmLogin.vue')
    },
    {
        path:"/sign",
        name:"SdmSign",
        component :() => import('@/components/SdmSign.vue')
    },
    {
        path:"/qs",
        name:"SdmQuestion",
        component :() => import('@/components/SdmQuestion.vue')
    }
];
const router = createRouter({
    history : createWebHistory(), routes,
});
export default router;