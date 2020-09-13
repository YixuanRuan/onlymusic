<template>
  <el-container id="app">
    <navbar id="navbar"></navbar>
    <div id="main">
      <router-view  v-if="isRouterAlive"></router-view>
    </div>
    <footbar id="footbar"></footbar>
  </el-container>
</template>

<script>
  import navbar from "@/components/navbar";

  import footbar from "@/components/footbar";

  export default {
    name: 'App',
    components: {
      navbar,
      footbar
    },
    data(){
      return{
        isRouterAlive:true
      }
    },
  }
</script>

<style>
  html,body{height: 100%; background-color: black;}
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #ffffff;
  }

  #navbar{flex:0;}
  #main{flex:1;}
  #footbar{flex:0;}
</style>
