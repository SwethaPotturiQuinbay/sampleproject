import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import personal from '@/components/personal'
import profile from '@/components/profile.vue'
import interview from '@/components/interview'
import expertise from '@/components/expertise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/interview',
      name: 'interview',
      component: interview
    },
    {
      path: '/expertise',
      name: 'expertise',
      component: expertise
    }
  ]
})