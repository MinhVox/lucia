<template>
  <div id="app">
    <Header/>
    <!-- <HelloWorld/> -->
    <UpcomingSoon/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import UpcomingSoon from './components/upcomingSoon/UpcomingSoon.vue'
export default {
  name: 'App',
   components: {
    Header: Header,
    // HelloWorld : HelloWorld,
    Footer: Footer,
    UpcomingSoon : UpcomingSoon
  },
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
