<template>
  <div id="accueil">
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
          v-model="formValues.confirmPassword"
        />
        <button type="submit">S'enregistrer</button>
        <p>{{ formMessage }}</p>
      </div>
    </form>
    <form @submit="submitLogin">
      <div id="login">
        <h1>Connection</h1>
        <input
          class="values"
          type="email"
          placeholder="Adresse email"
          v-model="formLogin.email"
        />
        <input
          class="values"
          type="password"
          placeholder="Mot de passe"
          v-model="formLogin.password"
        />
        <button type="submit">Se connecter</button>
        <p>{{ messageLogin }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

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
        confirmPassword: null,
      },
      formLogin: {
        email: null,
        password: null,
      },
      formMessage: null,
      messageLogin: null,
    };
  },
  // computed: {
  //   ...mapState(['formMessage', 'messageLog']),
  // },
  methods: {
    ...mapActions(['login']),
    submitForm(event) {
      event.preventDefault();
      if (this.formValues.password !== this.formValues.confirmPassword) {
        this.formMessage = 'Veuillez entrer le même mot de passe';
      } else {
        axios
          .post('http://localhost:3000/api/auth/signup', this.formValues)
          .then((res) => (this.formMessage = res.data.message))
          .catch((err) => (this.formMessage = err.data.error));
      }
    },
    submitLogin(event) {
      event.preventDefault();
      this.login(this.formLogin);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#accueil {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}

#sign-up,
#login {
  margin: auto;
  width: 100%;
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
  min-height: 50px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-top: 10px;
}

/* Media queries */
@media only screen and (max-width: 600px) {
  button {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  #accueil {
    flex-direction: column;
    align-items: center;
  }
}
</style>
