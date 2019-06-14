import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import DevApp from '@/components/DevApp'
import UserMenu from '@/components/UserMenu'
import UserLiveRecord from '@/components/UserLiveRecord'
import UserWithdrawal from '@/components/UserWithdrawal'
import UserBankInfo from '@/components/UserBankInfo'
import UserRecharge from '@/components/UserRecharge'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/App',
      component: DevApp,
      children:[
        {
          path: 'live-record',
          component: UserLiveRecord
        },
        {
          path: 'withdrawal',
          component: UserWithdrawal
        },
        {
          path: '/bank-info',
          component: UserBankInfo
        },
        {
          path: 'recharge',
          component: UserRecharge
        }
      ]
    }
  ]
})

