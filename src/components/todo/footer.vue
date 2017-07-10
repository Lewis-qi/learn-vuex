//筛选任务列表
<template>
    <div>
        <span @click="changeMode('active')">未完成</span>
        <span @click="changeMode('all')">所有</span>
        <span @click="changeMode('done')">已完成</span>
    
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(
            [
                'changeMode'
            ]
        )
    }
}
</script>
<style>

</style>