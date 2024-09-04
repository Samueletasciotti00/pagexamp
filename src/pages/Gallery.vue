<script>
export default {
  name: "Gallery",
  data() {
    return {
      
      //Immagini Database da poter modificare liberamente
      img: [
        'src/img/abbey02.jpg',
        'src/img/abbey_home.jpg',
        'src/img/festa_medievale.jpg',
        'src/img/abbazia.jpg',
        'src/img/museo.jpg',
        'src/img/archi_abbazia.jpg',
        'src/img/abbazia_night.jpg',
        'src/img/xl_abbey.jpg',
        'src/img/chiesa.jpg'
      ]
    };
  }
};
</script>

<template>
  <div class="container">
    <h2>La nostra gallery</h2>

    <div class="grid">
      <div v-for="(immagine, index) in img" :key="index" class="box">
        <img :src="immagine" alt="img">
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Default settings */
.container {
  color: #ffffff;
  padding-top: 100px;
}

/* Grid Settings */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
  gap: 35px; 
  max-width: 1300px;
  margin: 50px auto;
}

.grid .box {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: 1s;
}

img:hover {
  transform: scale(1.1);
}

h2{
  color: #965731;
  text-align: center;
  font-size: 55px;
  font-family: "Castoro Titling", serif ;
  font-weight: 600;
  font-style: normal;
}
</style>
