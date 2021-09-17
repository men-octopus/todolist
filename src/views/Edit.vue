<template>
  <div class="editor">
    <div class="editor-top">
      <h1>Edit</h1>
    </div>
    <div class="editor-main">
      <input name="todo" v-model="todoBody">
      <button @click="save">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data: function(){
    return{
      todoBody: ''
    }
  },
  mounted: function(){
    let id = this.$route.params["id"];
    let todo = this.$store.state.todos.find(todo => todo.id == id);
    this.todoBody = todo.body;
  },
  methods: {
    save: function(){
      this.$store.commit("update",{
        id: this.$route.params["id"],
        body: this.todoBody
      });
      this.$router.push('/');
    }
  }

}
</script>

<style>
  .editor-top h1{
    height: 70px;
    margin: 0;
    background: slategray;
    color: gainsboro;
    padding:  0 10px ;
    text-align: center;
    line-height: 70px;
    user-select: none;
  }

  .editor-main {
    text-align: center;
    margin-top: 15px;
  }

  .editor-main input {
    width: 40%;
    height: 20px;
  }

  .editor-main button {
    background: gainsboro;
    border-radius: 4px;
  }
</style>