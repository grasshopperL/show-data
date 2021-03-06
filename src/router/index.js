/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BigDataShow',
      meta: {
        title: "数据展示"
      },
      component: () => import(/* webpackChunkName: "UserQueryIndex" */ "@/components/BigDataShow"),
    }
  ]
})
