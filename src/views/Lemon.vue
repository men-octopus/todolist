<template>
  <div class="lemon-page">
    <div class="lemon-top"></div>
    <div class="lemon-list">
      <ul v-if="getLemons.length">
        <li v-for="todo in getLemons" :key="todo.id" > 
            {{ todo.body }}
          <button @click="deleteTodo(todo.id)">✕</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Lemon',
  methods: {
    deleteTodo: function(id){
      this.$store.commit("deleteTodo", id);
    }
  },
  computed: {
   getLemons(){
     return this.$store.getters.getLemons;
   }
  }
}
</script>

<style scoped>
.lemon-top {
    color: rgb(255, 253, 232);
    margin: 0;
    background: #ffe48a;
    /* padding:  0 10px ; */
    height: 70px;
    width: 100%;
  }

  ul {
  list-style: disc;
}

.lemon-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>