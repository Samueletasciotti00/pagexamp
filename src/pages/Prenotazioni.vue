<template>
  <div class="container">
    <!-- Titolo -->
    <h2>Prenota la visita guidada</h2>
    <h2>presso la nostra abbazia</h2>

    <!-- Paragrafo -->

    <div class="box">
      <!-- Paragrafo -->
      <div class="description">
        <h3>Tutte le info</h3>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sequi
        ratione molestias voluptate dolorum, voluptates neque consequatur
        laudantium, magni non perspiciatis, aliquam facilis incidunt minima quas
        maiores accusamus aut debitis. Aliquid recusandae magnam expedita nam,
        ea temporibus quos nihil laborum, dolore ex adipisci impedit.
        Repellendus, quo, est reiciendis voluptate ea amet soluta temporibus,
        necessitatibus eius nemo ratione maiores blanditiis aliquid. Suscipit ad
        ut illum tenetur error, maiores totam unde, quasi harum cupiditate vero?
        Amet quae deleniti voluptatem, impedit tempore, explicabo perferendis
        labore in quaerat commodi facilis dicta. Labore, omnis placeat? Quas
        placeat sint distinctio, quam blanditiis dolores eum ipsum, voluptates,
        rerum dolorem molestias. Eius, consectetur. Assumenda, dolore distinctio
        architecto fuga consequatur explicabo ex, cumque deleniti, vero quis
        quos possimus labore. Quod, quidem! Nesciunt fuga quas perspiciatis
        autem, eveniet temporibus qui fugit sint odit necessitatibus! Eum
        similique inventore natus consequatur reiciendis? Voluptatum eaque
        quibusdam voluptatem natus nisi suscipit consequuntur error amet.
      </p>
      </div>
      

      <div class="img">
        <img src="../img/escursione.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prenotazioni",
};
</script>

<style scoped>
/* Media Queries per Tablet e Mobile */
@media (max-width: 868px) {
  .box {
    flex-direction: column;
  }

  .description, .img {
    width: 100%;
  }
}

/* Container default */
.container {
  width: 100%;
  color: #ffffff;
  padding-top: 100px;
}

/* Box settings */
.box{
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Titol */
h2 {
  color: #965731;
  text-align: center;
  font-size: 55px;
  font-family: "Castoro Titling", serif;
  font-weight: 600;
  font-style: normal;
}

h3{
  color: #965731;
  text-align: left;
  font-size: 35px;
  font-family: "Castoro Titling", serif;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 20px;
}


/* Paragraf */
.description,.img{
  width: 50%;
  padding: 25px
}

img{
  width: 100%;
  border-radius: 20px;
}
</style>
