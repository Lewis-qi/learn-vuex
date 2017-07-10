//引入 vue  和 vuex
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
// 组件属性传递问题
export default new Vuex.Store({
  state: {
    // 全局变量，全局数据，   状态 ====》   装逼的说法，  学院派（专业的术语，本来很简单的东西，瞬间因为这些术语，变得高大上，很复杂），实用派（简单粗暴，易于理解）
    count: 0,
    globalTest: '这是一个全局测试数据'
  },
  mutations: {
    //全局方法  ，唯一的用途，修改全局变量
    increment: (state, num) => {
      state.count += num;
    },
    decrement: (state, num) => {
      state.count -= num;

    },
    changeGlobalTest: (state, text) => {
      state.globalTest = text;
    }
  }
})
