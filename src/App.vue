<template>
  <div id="app">
    <div id="nav">
      <div class="header">
        <router-link to="/" class="returnHome">◉</router-link> 
        <router-link to="/pink" class="goPink">❤</router-link> 
        <router-link to="/aqua" class="goAqua">★</router-link> 
        <router-link to="/mint" class="goMint">❁</router-link> 
        <router-link to="/lemon" class="goLemon">☺</router-link> 
      </div>
    </div>
    <router-view/>

  </div>
</template>


<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .header{
    /* height: 60px; */
    width: 100%;
    user-select: none;
  }

  .returnHome{
    text-decoration: none;
    background: slategray;
    color: gainsboro;
    font-size: 50px;
    font-weight: bold;
    display: inline-block;
    height: 60px;
    width:20%;
    text-align: center;
    line-height: 60px;
    border-radius: 8px 8px 0 0;
  }

  .goPink{
    background: pink; 
    color: seashell;
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    display: inline-block;
    height: 60px;
    width:20%;
    text-align: center;
    line-height: 60px;
    border-radius: 8px 8px 0 0;
  }

  .goAqua{
    background: rgb(158, 196, 231);
    color: rgb(233, 244, 255);
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    display: inline-block;
    height: 60px;
    width:20%;
    text-align: center;
    line-height: 60px;
    border-radius: 8px 8px 0 0;
  }

  .goMint{
    background: mediumaquamarine;
    color: mintcream;
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    display: inline-block;
    height: 60px;
    width:20%;
    text-align: center;
    line-height: 60px;
    border-radius: 8px 8px 0 0;
  }

  .goLemon{
    background: #ffe48a;
    color: rgb(255, 253, 232);
    text-decoration: none;
    font-size: 50px;
    font-weight: bold;
    display: inline-block;
    height: 60px;
    width:20%;
    text-align: center;
    line-height: 60px;
    border-radius: 8px 8px 0 0;
  }
</style>
