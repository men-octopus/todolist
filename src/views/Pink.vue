<template>
  <div class="pink-page">
    <div class="pink-top"></div>
    <div class="pink-list">
      <ul v-if="getPinks.length">
        <li v-for="todo in getPinks" :key="todo.id">
          {{ todo.body }}
          <button @click="deleteTodo(todo.id)">✕</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pink",
  methods: {
    deleteTodo: function(id) {
      this.$store.commit("deleteTodo", id);
    },
  },
  computed: {
    getPinks() {
      return this.$store.getters.getPinks;
    },
  },
};
</script>

<style scoped>
.pink-top {
  color: seashell;
  margin: 0;
  background: pink;
  /* padding:  0 10px ; */
  height: 70px;
  width: 100%;
}

ul {
  list-style: disc;
}

.pink-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
