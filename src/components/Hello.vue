<template>
  <div class="hello">
    价格:{{$store.state.count*45}}
    <father :test="test"></father>
    <h1>这是全局测试的数据，这里是Hello组件,使用vuex:{{$store.state.globalTest}}</h1>
  </div>
</template>

<script>
import father from './father';
export default {
  name: 'hello',
  props: [],
  components: {
    father
  },
  data() {
    return {
      test: '这是一个测试数据'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
