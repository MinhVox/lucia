<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
   components: {
    Header: Header,
    HelloWorld : HelloWorld,
    Footer: Footer
  },
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
