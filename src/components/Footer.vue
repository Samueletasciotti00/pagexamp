<template>
  <div class="container">

    <!-- Logo -->
    <div class="ft-list">
        <img src="../img/abbey.jpg" alt="">
    </div>

    <!-- CONTATTACI -->
    <div class="ft-list">

        <h3>CONTATTACI</h3>

        <ul>
            <li>Chiama al numero 333 - 333333</li>
            <li>emailprova@test.org</li>
        </ul>
    </div>

    <!-- DOVE SI TROVA? -->
    <div class="ft-list">
        
        <h3>DOVE SI TROVA?</h3>

        <ul>
            <li>Abbazia di Fossanova</li>
            <li></li>
        </ul>
    </div>

    <!-- LINK UTILI -->
    <div class="ft-list">

        <h3>LINK UTILI</h3>

        <ul>
            <li>https://Provaprova124</li>
            <li>https://Provaprova124</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
.container {
    width: 100%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    padding: 20px;
}

/* Immagine */
img {
    width: 40%;
    height: auto;
    border-radius: 35px;
}

/* Footer List */
.ft-list {
    width: 25%;
    height: auto;
    color: #ffffff;
    text-align: center;
    padding: 10px;
}

/* List style */
ul li {
    list-style: none;
}

h3{
    color: #965731;
    margin-bottom: 15px;
}
/* Media Queries per tablet e mobile */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    /* Immagine ridotta per schermi più piccoli */
    img {
        width: 60%;
        margin-bottom: 20px;
    }

    .ft-list {
        width: 100%;
        margin-bottom: 20px;
    }
}

@media (max-width: 480px) {
    img {
        width: 80%; 
    }

    .ft-list {
        width: 100%;
        margin-bottom: 15px;
    }

   
    h3 {
        font-size: 18px;
    }

    ul li {
        font-size: 14px;
    }
}

</style>