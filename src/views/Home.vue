<template>
  <div id="app">
    <h1>Main List</h1>
    <List/>
    <New/>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import New from '@/components/New.vue'

export default {
  name: 'Home',
  components: {
    List,
    New
  }
}
</script>

<style>
#app>h1{
  height: 70px;
  margin: 0;
  background: slategray;
  color: gainsboro;
  padding:  0 10px ;
  text-align: center;
  line-height: 70px;
  user-select: none;
}
</style>