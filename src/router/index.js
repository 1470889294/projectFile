import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/search",
    name:"search",
    component:()=>import("../views/search.vue")
  },{
    path:"/order",
    name:"order",
    component:()=>import("../views/order.vue")
  },{
    path:"/mine",
    name:"mine",
    component:()=>import("../views/mine.vue")
  },{
    path:"/detail",
    name:"detail",
    props:true,
    component:()=>import("../views/detail.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },
  {
    path:"/city",
    name:"city",
    component:()=>import("../views/city.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
