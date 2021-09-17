<template>
  <div class="list">
    <ul v-if="newest.length">
      <li v-for="todo in newest" :key="todo.id" > 
        <router-link :to="{name:'Edit', params: { id: todo.id}}">
        <span :class="todo.hasColor">
          {{ todo.body }}
        </span>
         
        </router-link>
        <button @click="deleteTodo(todo.id)">✕</button>
        <input type="checkbox" v-model="todo.hasColor.pink" @click = "toggleColor(todo.id, 'pink')">❤
        <input type="checkbox" v-model="todo.hasColor.aqua" @click = "toggleColor(todo.id, 'aqua')">★
        <input type="checkbox" v-model="todo.hasColor.mint" @click = "toggleColor(todo.id, 'mint')">❁
        <input type="checkbox" v-model="todo.hasColor.lemon" @click = "toggleColor(todo.id, 'lemon')">☺
      </li>
    </ul>
    <ul v-else>
      <p>君だけのリストを作ろう！！</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    newest: function(){
      return this.$store.state.todos;
    },
   
  },
  methods: {
    deleteTodo: function(id){
      this.$store.commit("deleteTodo", id);
    },
    toggleColor:function(id, colorName){
      // console.log(id, colorName);
      return this.$store.commit("toggleColor",{id, colorName});
    }
  }
};
</script>

<style>
  .list {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ul {
    list-style: disc;
  }

  li {
    user-select: none;
  }

p {
  text-align: center;
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  color: slategray;
  user-select: none;
}


</style>