<script>
// Import del Routing
import { useRouter } from "vue-router";

export default {
  name: "Navbar",
  setup() {
    const router = useRouter();
    const routes = router.getRoutes().filter((route) => route.name);

    return { routes };
  },
  data() {
    return {
      isMenuVisible: false, // Stato del menu (visibile o nascosto)
    };
  },
  methods: {
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    const menu = document.getElementById("right-menu");

    if (this.isMenuVisible) {
      menu.classList.add("show");

      // Aggiungere l'event listener per rimuovere la classe "show" quando si clicca fuori dal menu
      document.addEventListener("click", this.hideMenuOnClickOutside);
    } else {
      menu.classList.remove("show");

      // Rimuovere l'event listener quando il menu viene nascosto
      document.removeEventListener("click", this.hideMenuOnClickOutside);
    }
  },
  hideMenuOnClickOutside(event) {
    const menu = document.getElementById("right-menu");
    const burgerMenu = document.querySelector(".menu-icon");

    // Controllare se il click è avvenuto fuori dal menu e fuori dal burger menu
    if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
      menu.classList.remove("show");
      this.isMenuVisible = false;

      // Rimuovere l'event listener una volta nascosto il menu
      document.removeEventListener("click", this.hideMenuOnClickOutside);
    }
  },
  hideMenu() {
    const menu = document.getElementById("right-menu");
    menu.classList.remove("show");
    this.isMenuVisible = false;

    // Rimuovere l'event listener una volta nascosto il menu
    document.removeEventListener("click", this.hideMenuOnClickOutside);
  }
},

};
</script>


<template>
  <div id="nav-bar">
    <!-- Logo -->
    <div class="logo">
      <img src="../img/abbey.jpg" alt="" />
    </div>

    <!-- Button e Menù -->
    <div class="action">
      <!-- Bottone per la prenzotazione -->
      <button class="prenota-button">PRENOTA</button>

      <div class="menu-icon" @click="toggleMenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
      </div>
    </div>
  </div>

  <div id="right-menu" :class="{ show: isMenuVisible }">
    <!-- X per chiusura elemento -->
    <div class="x" @click="toggleMenu">X</div>

    <!-- Lista Voci Menu -->
    <ul class="list">
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route.path" @click="hideMenu" >{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Stile della Navbar */
#nav-bar {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  border-bottom: 1px solid gray;
  z-index: 100;
  background-color: #000;

  /* Flex items */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Blocchi interni alla nav */
.logo {
  width: 218px;
  height: 60px;

  background-color: black;
}

/* immagine del logo */
.logo img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}

.action {
  width: 170px;
  height: 60px;

  /* Flex */
  display: flex;
  align-items: center;
}

/* Impostazioni del bottone */
.prenota-button {
  border: none;
  border-radius: 25px;
  width: 138px;
  height: 46px;
  background-color: #965731;
  color: #fff;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease; /* Transizione per hover */
  font-family: "Montserrat", sans-serif;
}

.prenota-button:hover {
  background-color: #ffffff;
  color: #9b7f4e;
}

.prenota-button:active {
  transform: scale(0.95); 
}

/* Menu Burger Css */
.menu-icon {
  width: 45px;
  height: 35px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar1,
.bar2 {
  width: 100%;
  height: 4px;
  background-color: white;
  transition: all 1s ease-in-out;
}

.bar1 {
  transform: rotate(0deg);
}

.bar2 {
  transform: rotate(0deg);
}

.menu-icon:hover .bar1 {
  transform: rotate(360deg);
}

.menu-icon:hover .bar2 {
  transform: rotate(-360deg);
}

.menu-icon {
  cursor: pointer;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
}

/* MENU A SCOMPARSA */
#right-menu {
  float: right;
  height: 100vh;
  width: 35%;
  background-color: #965731;
  position: fixed;
  top: 0;
  right: -35%;
  transition: right 0.5s ease; /* Transizione per animare l'entrata */
  z-index: 150;
}

/* Completamento dell'effetto */
#right-menu.show {
  right: 0;
}

/* Gestione interna del menu */
.x {
  font-size: 36px;
  color: #ffffff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  transition: 0.4s;
}

.x:hover {
  color: #000;
  cursor: pointer;
}
a:hover {
  color: #000;
  cursor: pointer;
}

/* Voci menu */
.list {
  margin: 15% auto;
}

.list li {
  margin: 40px;
  font-size: 25px;
  list-style: none;
  text-align: center;
  color: #ffffff;
  transition: 0.4s;
}

.list li:hover {
  color: #000;
}

a {
  text-decoration: none;
  font-size: 36px;
  color: #ffffff;
  font-family: "Courgette", cursive;
  padding: 10px;
  transition: 0.4s;
}
</style>
