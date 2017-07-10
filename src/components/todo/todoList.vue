// 展示任务列表

<template>
    <ul>
        <li v-for="todo,index in finishtodos" :key="index" :style="{color:todo.done?'green':'red'}">
            <span @click="toggleTodo(todo)"> {{todo.title}}</span>
            <input type="button" value="删除" @click="deleteTodo(todo)" />
        </li>
    </ul>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            finishtodos: []
        }
    },
    computed: {
        ...mapState({
            todos: state => state.todos,
            mode: state => state.mode

        }),
        ...mapGetters({
            doneTodos: 'doneTodos',
            activeTodos: 'activeTodos',
            allTodos: 'allTodos'
        })
    },
    mounted() {
        this.finishtodos = this[this.mode + 'Todos'];
    },
    methods: {
        ...mapMutations([
            'toggleTodo', 'deleteTodo'
        ])
    }
}
</script>
<style >

</style>