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
      <input class="values" type="email" placeholder="Adresse email" />
      <input class="values" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
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
body {
  font-family: cursive, Arial, sans-serif;
}

#logo {
  width: 30%;
  display: flex;
  text-align: center;
  margin: auto;
}

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
#profil,
#messagerie,
#posts {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  border: 2px solid black;
}
#profil-image {
  width: 30%;
  height: 30%;
  margin: auto;
}
#description {
  display: flex;
  flex-direction: row;
  width: 80%;
}
#messages button {
  width: 20%;
  background-color: rgb(253, 41, 0);
}

/* Media queries */
@media only screen and (max-width: 600px) {
  button {
    width: 80%;
  }
}

@media only screen and (max-width: 375px) {
  #sign-in {
    display: block;
  }
  button {
    height: 100%;
    width: 100%;
  }
}
</style>
