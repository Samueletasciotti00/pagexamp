<template>
  <!-- Titol -->
  <h1>Abbazia di Fossanova</h1>

  <!-- Immage -->
  <Carousel></Carousel>

  <!-- Paragrafo -->
  <TextLeft></TextLeft>

  <!-- Mappa -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.026253185501!2d13.189796290993156!3d41.43865199727597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13253fca4405c7c3%3A0x41a71e7e189c38ba!2sAbbazia%20di%20Fossanova!5e0!3m2!1sit!2sit!4v1725453672806!5m2!1sit!2sit"
    width="100%"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>

  <!-- La storia dell'abbazia -->
  <h2>HISTORY</h2>

  <!-- Paragrafo -->
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque illo
    dignissimos commodi quisquam rem iure modi vel natus esse, expedita ea
    placeat sed dolorem facere necessitatibus quas similique deserunt quae.
    Distinctio itaque fuga, officia impedit quis rerum magnam deserunt est
    nostrum inventore cupiditate eaque nesciunt fugiat dolorem. Sapiente
    nesciunt, ducimus, dolores libero dolorum eveniet repellat nobis labore
    nostrum deleniti eos. Doloribus vero aut delectus voluptatem aspernatur
    minima reiciendis porro sed rerum quas aliquam, repudiandae numquam
    cupiditate alias facere mollitia eum placeat quaerat animi cumque ad. Nam
    nobis magnam dicta totam. Deserunt, quae doloremque, vitae vero non rem vel
    itaque provident quisquam, iste corporis et beatae cumque laborum ab! Omnis
    amet ab rem molestias praesentium mollitia suscipit pariatur placeat
    necessitatibus aspernatur? Asperiores, voluptas quisquam dicta voluptatum
    rerum illo odit est pariatur tempora cupiditate! Minus, dolorum praesentium.
    Vitae pariatur facilis temporibus impedit quasi. Maxime enim tempora rem in
    aliquid quis aspernatur nulla.
  </p>

  <div class="video">
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/Whe493qF4CA"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import TextLeft from "../components/TextLeft.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    TextLeft,
  },
};
</script>

<style scoped>
/* Titol Css */
h1,
h2 {
  color: #965731;
  text-align: center;
  font-size: 55px;
  font-family: "Castoro Titling", serif;
  font-weight: 600;
  font-style: normal;
}

h1 {
  padding-top: 100px;
  animation: slideInFromRight 1s ease-out;
}

h2 {
  margin-top: 120px;
  margin-bottom: 120px;
}

p {
  color: #ffffff;
  margin: 20px 10%;
  font-size: 20px;
}

/* Definizione dell'animazione */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
