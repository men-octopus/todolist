// import Vue from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    save(state, todo) {
      if(state.todos.length){ //todosの中身がある場合
        var max = state.todos[state.todos.length -1].id;//今の最後のIDをmaxに代入
        //state.todos.length-1 = 要素のindexを指す。maxをstate.todos.length-1番目のIDとした。
      }else{
        max = 0;
      }
      todo.id = max + 1;
      todo.hasColor = {pink: false, aqua:false, mint:false, lemon:false}
      state.todos.push(todo);
    },
    update(state, data) {
      var a = state.todos.find(todo => todo.id == data.id);
      a.body = data.body;
    },
    deleteTodo(state, id){
      var b = state.todos.findIndex(todo => todo.id == id);
      // console.log(id,b);
      if(b >= 0){
        state.todos.splice(b,1);
      }
    },
    toggleColor(state, {id,colorName}){
      var c = state.todos.find(todo => todo.id == id);
      if (colorName === 'pink') {
        c.hasColor.pink = !c.hasColor.pink
      }
      if (colorName === 'aqua') {
        c.hasColor.aqua = !c.hasColor.aqua
      }
      if (colorName === 'mint') {
        c.hasColor.mint = !c.hasColor.mint
      }
      if (colorName === 'lemon') {
        c.hasColor.lemon = !c.hasColor.lemon
      }
    },
  },
  getters : {
    getPinks(state){
      return state.todos.filter(todo => todo.hasColor.pink)
    },
    getAquas(state){
      return state.todos.filter(todo => todo.hasColor.aqua)
    },
    getMints(state){
      return state.todos.filter(todo => todo.hasColor.mint)
    },
    getLemons(state){
      return state.todos.filter(todo => todo.hasColor.lemon)
    },
  }
})

