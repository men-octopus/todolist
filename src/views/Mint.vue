<template>
  <div class="mint-page">
    <div class="mint-top"></div>
    <div class="mint-list">
      <ul v-if="getMints.length">
        <li v-for="todo in getMints" :key="todo.id" > 
            {{ todo.body }}
          <button @click="deleteTodo(todo.id)">✕</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Mint',
  methods: {
    deleteTodo: function(id){
      this.$store.commit("deleteTodo", id);
    }
  },
  computed: {
   getMints(){
     return this.$store.getters.getMints;
   }
  }
}
</script>

<style scoped>
.mint-top {
    color: mintcream;
    margin: 0;
    background: mediumaquamarine;
    /* padding:  0 10px ; */
    height: 70px;
    width: 100%;
  }

  ul {
  list-style: disc;
}

.mint-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>