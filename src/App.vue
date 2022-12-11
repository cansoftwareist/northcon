<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from '@/Main.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import '~mdb-ui-kit/css/mdb.min.css';
@import "@fortawesome/fontawesome-free/css/all.min.css";
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap";
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
