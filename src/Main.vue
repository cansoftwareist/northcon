<template>
    <div class="mainpage">
        <home-view></home-view>
    </div>
</template>
  
<script>
import HomeView from './components/HomeView.vue'
export default {
  name: 'MainPage',
  components: {
    HomeView
  }
}
</script>