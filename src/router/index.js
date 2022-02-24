import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import personal from '@/components/personal'
import profile from '@/components/profile.vue'
import interview from '@/components/interview'
import expertise from '@/components/expertise'
import submit from '@/components/submit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
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
    },
    {
      path: '/submit',
      name: 'submit',
      component: submit
    }
  ]
})
