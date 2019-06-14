<template>
    <div class="menu">
        <ul class="menu-ul">
            <router-link class="menu-link" to="/App/withdrawal" tag="li">Personnal Center</router-link>
            <router-link class="menu-link" to="/App/live-record" tag="li">Live Record</router-link>
            <router-link class="menu-link" to="/App/recharge" tag="li">Recharge</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'UserMenu'
}
</script>
<style scoped>
.menu{background: #fff; width: 300px; height: 728px; margin-top: 15px; text-align: left; color: #737373}
.menu-ul{padding: 0; margin: 0;}
.router-link-active{line-height:60px; color: #353535; background: rgb(81, 226, 207);margin-left: 20px;list-style: none}
.menu-link{list-style-type: none; height: 60px; cursor: pointer; line-height: 60px; padding: 0 0 0 25px; transition: all .4s;}
</style>

