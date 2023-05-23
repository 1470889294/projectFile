<template>
  <div id="app">
    
    <keep-alive :include="/HomeView/">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return{
      activeeee:0,
    }
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
  list-style: none;
  box-sizing:border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:.16rem;
}
</style>
