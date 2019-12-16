import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homepage from '@/components/homePage/index'
import coursestudy from '@/components/courseStudy/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/coursestudy',
      name: 'coursestudy',
      component: coursestudy
    }
  ]
})
