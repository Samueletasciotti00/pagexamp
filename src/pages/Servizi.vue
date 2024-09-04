<template>
  <!-- Componente di descrizione -->
  <div class="container">
    <!-- Div Description -->
    <div class="box">
      <h3>Cosa offriamo?</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel
        iste provident, magnam veritatis delectus, mollitia cumque rem dicta ea
        impedit debitis earum molestiae, placeat repudiandae voluptatem maiores
        expedita corporis? Quae fugiat reiciendis debitis adipisci aliquid quo
        ex harum eum modi, ratione provident tempore aspernatur molestiae
        commodi numquam vel, exercitationem, excepturi repellendus aliquam.
        Vitae recusandae officia, ipsam fugit nulla quod? Earum repellendus cum
        quis id dicta minima, reprehenderit accusantium quasi aut modi obcaecati
        tempora, ab pariatur rem excepturi porro,
      </p>
    </div>

    <!-- Div img -->
    <div>
      <img src="../img/museo.jpg" alt="" />
    </div>
  </div>

  

  <form action="post">
    <h2>Iscriviti alla newsletter</h2>
    <Form> </Form>
  </form>
</template>

<script>

import Form from "../components/Servizi/Form.vue";
import Evento from "../components/Servizi/Evento.vue";

export default {
  name: "Servizi",
  components: {
    Form,
    Evento,
  },
};
</script>

<style scoped>
h2 {
  color: #ffffff;
  text-align: center;
}

.img{
  width: 100%;
  margin: 0 auto;
}

/* Componente  */
.container {
  width: 100%;
  height: 60vh;
  padding-top: 100px;
  color: #ffffff;

  /* Flex */
  display: flex;
  align-items: center;
}

/* Immagine */
img {
  max-width: 60%;
  border-radius: 20px;
  transition: 0.75s;
}

/* Paragrafo */
.container div {
  width: 50%;
  text-align: center;
  /* border: 1px solid red; */
}

h3 {
  color: #965731;
  font-size: 30px;
  font-family: "Courgette", cursive;
  text-align: left;
  margin-bottom: 15px;
}

.box {
  padding: 20px;
}

.box p {
  text-align: left;
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
}

img:hover {
  transform: scale(1.1);
}

/* Margine del Form */
form {
  margin: 100px;
}

/* Media query per tablet e mobile */
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

  .container div {
    width: 80%;
  }

  img {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .box {
    padding: 10px;
  }
}
</style>
