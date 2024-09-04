<template>
  <div class="container">
    <!-- Titolo -->
    <h2>Prossimi eventi</h2>

    <!-- Descrizione -->
    

  </div>
</template>

<script>
export default {
  nam: "Evento",
};
</script>

<style scoped>
/* Container del componente */
.container {
  color: #fff;
  width: 80%;
  margin: 100px auto;
  /* Flex */
  display: flex;
  flex-direction: column;
}

h2{
  color: #965731;
  font-size: 30px;
  font-family: "Courgette", cursive;
  text-align: left;
  margin-bottom: 15px;
}

p{
  width: 80%;
  margin: 25px;
}

.img {
  width: 100%;
}

img {
  width: 100%;
  height: auto;
}
</style>
