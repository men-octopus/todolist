<template>
  <div class="aqua-page">
    <div class="aqua-top"></div>
    <div class="aqua-list">
      <ul v-if="getAquas.length">
        <li v-for="todo in getAquas" :key="todo.id" > 
            {{ todo.body }}
          <button @click="deleteTodo(todo.id)">✕</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Aqua',
  methods: {
    deleteTodo: function(id){
      this.$store.commit("deleteTodo", id);
    }
  },
  computed: {
   getAquas(){
     return this.$store.getters.getAquas;
   }
  }
}
</script>

<style scoped>
  .aqua-top {
    color: rgb(233, 244, 255);
    margin: 0;
    background: rgb(158, 196, 231);
    /* padding:  0 10px ; */
    height: 70px;
    width: 100%;
  }

  ul {
  list-style: disc;
}

.aqua-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>