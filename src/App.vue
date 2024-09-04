<script>
import Carousel from "./components/Carousel.vue";
import Footer from './components/Footer.vue';
import Navbar from "./components/Navbar.vue";
import TextLeft from "./components/TextLeft.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Carousel,
    TextLeft,
    Footer
  },
};
</script>

<template>
  <!-- Barra di navigazione -->
  <Navbar></Navbar>

  <!-- Routing Per La navigazione delle Pagine -->
  <router-view></router-view>


  <!-- Footer -->
  <Footer></Footer>
</template>

<style scoped>

</style>
