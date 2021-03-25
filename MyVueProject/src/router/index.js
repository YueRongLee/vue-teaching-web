import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Data from '@/components/Data'
import Example01 from '@/components/Example01'
import Example02 from '@/components/Example02'
import Example03 from '@/components/Example03'
import Example04 from '@/components/Example04'
import Example05 from '@/components/Example05'
import Example06 from '@/components/Example06'
import Example07 from '@/components/example07/Example07_2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data',
      component: Data
    },
    {
      path: '/example01',
      component: Example01
    },
    {
      path: '/example02',
      component: Example02
    },
    {
      path: '/example03',
      component: Example03
    },
    {
      path: '/example04',
      component: Example04
    },
    {
      path: '/example05',
      component: Example05
    },
    {
      path: '/example06',
      component: Example06
    },
    {
      path: '/example07',
      component: Example07
    }
  ]
})
