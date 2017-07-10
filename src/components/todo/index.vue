<template>
    <div>
        <h1>任务管理系统</h1>
        <v-header></v-header>
        <todo-list></todo-list>
        <v-footer></v-footer>
    </div>
</template>
<script>
import header from './header';
import footer from './footer';
import todoList from './todoList';
export default {
    components: {
        'v-header': header,
        'v-footer': footer,
        'todo-list': todoList
    }
}
</script>
<style >

</style>