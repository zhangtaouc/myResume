import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path: 'hello',
        component: () => import('@/components/HelloWorld.vue')
      }
    ],
    meta: {
      title: '张涛',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/Home.vue')
  },
  {
    // 匹配不到的页面
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '张涛',
      keepAlive: true,
      requireAuth: false
    },
    // component: () => import('@/pages/error/NotFound.vue')
    component: () => import('@/pages/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})
export default router
