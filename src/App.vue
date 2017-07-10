<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!--

      
    -->
    全局变量{{$store.state.count}}
    <button @click="$store.commit('increment',10)">点击添加</button>
    <button @click="$store.commit('decrement',100)">点击减少</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
