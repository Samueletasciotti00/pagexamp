<script>
export default {
  name: "Carousel",
};
</script>

<template>
  <div id="container">
    <img src="../img/abbazia.jpg" alt="" />
    <div class="dark"></div>
  </div>
</template>

<style scoped>

/* Default settings */
#container {
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
}

/* Immagine A tutto schermo */
#container img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Opacità sull'img */
.dark {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6); 
  z-index: 2;
}
</style>
