import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'AppComponent',
    component: App
  },
  {
    path: '/login',
    name: 'LoginComponent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../page/Login.vue')
  },
  {
    path: '/memo',
    name: 'MemoComponent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "memo" */ '../page/Memo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
