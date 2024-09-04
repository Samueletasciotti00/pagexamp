<template>
  <div class="container">

    <!-- Sinistra -->
    <div class="box">

      <h3>Dove si trova?</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptate tenetur ea a sed perspiciatis iste reprehenderit vitae. Illum
        quos officiis est aliquid, et beatae veritatis ad sunt fuga explicabo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptate tenetur ea a sed perspiciatis iste reprehenderit vitae. Illum
        quos officiis est aliquid, et beatae veritatis ad sunt fuga explicabo.
      </p>
    </div>

    <!-- Destra -->
    <div class="box">
        <img src="../img/abbey02.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "TextLeft",
};
</script>

<style scoped>

/* Container of component */
.container{
    color: aliceblue;
    width: 80%;
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 45px;
}


/* Boxs settings */
.box{
    width: 70%;
    height: 100%;
    padding: 5px;

}

.box img{
    width: 100%;
    border-radius: 25px;
}

.box h3,p{
    text-align: left;
}

.box h3{
    font-size: 40px;
    margin-bottom: 10px;
    color: #965731;
    font-family: "Courgette", cursive;
}

/* Media Query per Tablet */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .box {
    width: 100%;
    margin-bottom: 20px;
  }

  .box:last-child {
    margin-bottom: 0;
  }
}

p{
  gap: 100px;
}

</style>
