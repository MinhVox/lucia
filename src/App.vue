<template>
  <div id="app">
    <Header/>
    <Home/>
    <!-- <UpcomingSoon/> -->
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import UpcomingSoon from './components/upcomingSoon/UpcomingSoon.vue'
import Home from './components/home/HomePage.vue'
export default {
  name: 'App',
   components: {
    Header: Header,
    Footer: Footer,
    // UpcomingSoon : UpcomingSoon
    Home: Home
  },
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
