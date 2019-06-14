<template>
  <div class="container" id="devApp">
    <div class="left">
        <UserInfo :nick="userInfo.nick||''" :portrait="userInfo.portrait || ''" :level="userInfo.ulevel || 1" :uid="userInfo.uid || ''" :starNumber="userInfo.point||0" :diamondNumber="userInfo.gold||0"></UserInfo>
        <UserMenu :uid="userInfo.uid"></UserMenu>
        
    </div>
    <div class="right">
      <!-- <UserLiveRecord></UserLiveRecord> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import UserMenu from './UserMenu.vue'
// import index from '../router/index.js'
// import UserLiveRecord from './UserLiveRecord'
export default {
  name: "DevApp",
  data(){
    return {
      isLogin: false,
      userInfo: { //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        gold: null,
        point: null,
        portrait: null
      }
    }
  },
  components: {
    UserInfo,
    UserMenu,
    // UserContent
  //  UserLiveRecord
  },
  mounted(){
    //组件开始挂载时获取用户信息
    this.getUserInfo();
    // 起始路由
    this.$router.push('/App/withdrawal')
  },

  methods: {
    //请求用户的一些信息
    getUserInfo(){

      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: 'Doterlin',
        ulevel: 20,
        uid: '10000',
        gold: '2186',
        point: '8864',
        portrait: 'images/profile.png'
      }

      //实例开发中这里会向服务端请求数据
      //如下(用了vue-resource):
      /*ts.$http.get(url, {
        //参数
        "params":{}
      }).then((response) => {
        //Success
      }, (response) => {
        //Error
      });*/

      // 提交mutation到Store
      this.$store.commit('updateUserInfo', this.userInfo); 
    }
  }
}
</script>

<style type="text/css">

/* @import"../css/style.css" */
body{
  background: #f1f1f1;
}
.container{
  display:flex;
  justify-content: space-between;
  /* background: #f1f1f1; */
  /* display: inline-block */
}
.right{
  width:100%;
  /* margin-left: 40px */
}

</style>
