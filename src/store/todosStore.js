//引入 vue  和 vuex
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
// 组件属性传递问题
export default new Vuex.Store({
  state: {
    mode: 'all',
    todos: [{

      title: '学习vuex',
      done: false
    }, {

      title: '开发网易云音乐',
      done: false
    }]
  },
  getters: {
    doneTodos: state => state.todos.filter(item => item.done),
    activeTodos: state => state.todos.filter(item => !item.done),
    allTodos: state => state.todos
  },
  mutations: {
    changeMode: (state, mode) => {
      console.log(mode)
      state.mode = mode;
    },
    addTodo: (state, text) => {
      state.todos.push({
        done: false,
        title: text
      })
    },
    toggleTodo: (state, todo) => {
      let nowTodo = state.todos[state.todos.indexOf(todo)];
      nowTodo.done = !nowTodo.done;

    },
    deleteTodo: (state, todo) => {
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    }
  }
})
