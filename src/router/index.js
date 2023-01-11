import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/index', component: () => import('@/views/index/index.vue'), name: 'index' },
    { path: '/login', component: () => import('@/views/login/login.vue'), name: 'login' },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    next()
  }
})

export default router
