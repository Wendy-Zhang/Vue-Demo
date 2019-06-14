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
        // {
        //   path: '/recharge',
        //   component: UserRecharge
        // },
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

// var devApp = new Vue({
//   data:{},
//   el:'#devApp',
//   render:h => h(DevApp),
//   router,
//   store,
//   mounted(){
//     this.$router.push('/App/withdrawal')
//   }
// })


// onst router = new VueRouter({
//   routes: [{
//    const router = new VueRouter({
//   routes: [{
//     path: '/live-record',
//     component: UserLiveRecord
//   }, {
//     path: '/recharge',
//     component: UserRecharge
//   }, {
//     path: '/withdrawal',
//     component: UserWithdrawal
//   }, {
//     path: '/bank-info',
//     component: UserBankInfo
//   }]
// })
//   }, {
//     path: '/recharge',
//     component: UserRecharge
//   }, {
//     path: '/withdrawal',
//     component: UserWithdrawal
//   }, {
//     path: '/bank-info',
//     component: UserBankInfo
//   }]
// })
