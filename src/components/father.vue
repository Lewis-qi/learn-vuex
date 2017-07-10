<template>
    <div>
    
        这是父组件,
        <h2>这是父组件获取props “test” {{test}}</h2>
        <son :test="test" @fn="getSonData"></son>
        <h1>这是全局测试的数据，这里是father组件,使用vuex:{{$store.state.globalTest}}</h1>
    </div>
</template>
<script>
import son from './son';
export default {
    props: ['test'],
    components: {
        son
    },
    methods: {
        getSonData(data) {
            console.log('父组件已经接受到数据啦:' + data);
            this.test = data;
        }
    }
}
</script>
<style lang="">

</style>