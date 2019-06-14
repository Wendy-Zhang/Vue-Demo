<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <h1>Welcome to my App</h1> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    // TodoList
  }
}
</script>

<style>
#app {
  /* background: #f1f1f1; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 80px 300px 0 300px;
}
.h1{
  text-align: center;
}
.icon {
  width: 1.5em; height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
