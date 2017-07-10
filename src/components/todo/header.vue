//添加todo
<template>
    <div>
        <input type="text" v-model="todoText" @keydown.enter="addTodoHandle" /> {{todoText}}
        <button @click="addTodoHandle">添加任务</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        ...mapMutations([
            'addTodo'
        ]),
        addTodoHandle() {
            let text = this.todoText;
            if (text.length === 0) {
                alert('任务名称不能为空');
                return;
            }
            this.addTodo(text);
            this.todoText = '';
        }
    }
}
</script>
<style >

</style>