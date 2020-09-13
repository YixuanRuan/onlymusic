import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "@/views/home";

const routes = [
  {
    path: "/",
    name: home,
    component: home,
  }
]

const router = new VueRouter({
  routes
})

export default router

