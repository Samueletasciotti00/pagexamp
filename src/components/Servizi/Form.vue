<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">Nome</label>
        <input type="text" id="firstName" v-model="form.firstName" required>
      </div>

      <div class="form-group">
        <label for="lastName">Cognome</label>
        <input type="text" id="lastName" v-model="form.lastName" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>

      <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="tel" id="phone" v-model="form.phone" required>
      </div>

      <button type="submit">Invia</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Logica di invio del form
      console.log('Form Data:', this.form);
      alert('Form inviato con successo!');
    }
  }
};
</script>

<style scoped>
/* Stile del contenitore del form */
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  background-color: black;
  font-family: Arial, sans-serif;
}

/* Stile dei gruppi di input */
.form-group {
  margin-bottom: 15px;
}

/* Stile delle etichette */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #965731;
}

/* Stile degli input */
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #000000;
}

/* Stile del pulsante di invio */
button {
  width: 100%;
  padding: 10px;
  background-color: #965731;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

/* Stile hover per il pulsante di invio */
button:hover {
  background-color: #965731;
}
</style>
