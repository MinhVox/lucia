<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
// import UpcomingSoon from './components/upcomingSoon/UpcomingSoon.vue'
// import Home from './views/home/HomePage.vue'
export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer,
    // UpcomingSoon : UpcomingSoon
    // Home: Home
  },

  created() {
    this.$router.push({ name: "HomePage" });
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
