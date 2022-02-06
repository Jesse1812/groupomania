<template>
  <form @submit="submitForm" id="sign-in">
    <div id="sign-up">
      <h1>Nouvel utilisateur</h1>
      <input
        class="values"
        type="text"
        placeholder="Prénom"
        v-model="formValues.prenom"
      />
      <input
        class="values"
        type="text"
        placeholder="Nom"
        v-model="formValues.nom"
      />
      <input
        class="values"
        type="email"
        placeholder="Adresse email"
        v-model="formValues.email"
      />
      <input
        class="values"
        type="password"
        placeholder="Mot de passe"
        v-model="formValues.password"
      />
      <input
        class="values"
        type="password"
        placeholder="Confirmez le mot de passe"
      />
      <button type="submit">S'enregistrer</button>
    </div>
    <div id="login">
      <h1>Connexion</h1>
      <input
        class="values"
        type="email"
        placeholder="Adresse email"
        v-model="formValues.email_login"
      />
      <input
        class="values"
        type="password"
        placeholder="Mot de passe"
        v-model="formValues.password_login"
      />
      <button type="submit">Se connecter</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Accueil',
  props: {
    msg: String,
  },
  data() {
    return {
      formValues: {
        nom: null,
        prenom: null,
        email: null,
        password: null,
        email_login: null,
        password_login: null,
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.formValues);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sign-in {
  display: flex;
  flex-direction: row;
}

#sign-up,
#login {
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

input {
  margin-bottom: 20px;
  height: 20px;
}

input::placeholder {
  text-align: center;
}

button {
  width: 50%;
  height: 40px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-top: 10px;
}

#delete-account {
  margin-top: 50px;
  background-color: red;
  color: white;
  margin-bottom: 20px;
}
</style>
