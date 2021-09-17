<template>
  <div class="add-newtext">
    <input name="todo" type="text" v-model="todoBody" placeholder="TO DO">
    <button @click="save">Add</button>
  </div>
</template>

<script>
export default {
  name: 'New',
  data: function(){
    return{
      todoBody: "",
    }
  },
  methods: {
    save: function(){
      this.$store.commit("save", {
        body: this.todoBody,
      });
      this.todoBody = '';
    },
    // remove: function(){
    //   this.todoBody = '';
    // }
  }
}
</script>

<style>
  .add-newtext {
    text-align: center;
    user-select: none;
  }

  .add-newtext input {
    width: 40%;
    height: 20px;
  }

  .add-newtext button {
    background: gainsboro;
    border-radius: 4px;
  }
</style>