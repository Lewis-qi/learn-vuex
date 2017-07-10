<template>
    <div>
        这是儿子组件
        <h2>这是儿子组件获取props “test” {{test}}</h2>
        <h1>这是全局测试的数据，这里是son组件,使用vuex:{{$store.state.globalTest}}</h1>
        <button @click="changeTest">改变数据</button>
        <button @click="$store.commit('changeGlobalTest','全局变量数据改变啦哈')">改变全局数据</button>
    </div>
</template>
<script>
// 子组件如何传到父组件
export default {
    props: ['test'],
    methods: {
        changeTest() {
            let text = "数据发生改变了";
            this.test = text;
            this.$emit('fn', text);
        }
    }
} 
</script>
<style lang="">

</style>