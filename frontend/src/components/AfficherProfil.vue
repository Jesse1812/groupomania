<template>
  <section id="profil">
    <h1>Profil</h1>
    <div id="description">
      <img
        id="profil-image"
        src="../assets/images/profile.png"
        alt="image de profil"
      />
      <div id="colonne">
        <h2>Nom: {{ userInfo && userInfo.firstName }}</h2>
        <h2>Prénom: {{ userInfo && userInfo.lastName }}</h2>
      </div>
    </div>
    <input id="modify-pic" type="file" @change="onFileChange" />
    <button id="add-pic" type="submit" @click="addPicture">
      Enregistrer ma photo
    </button>
    <button @click="deconnect()" id="deconnect" type="submit">
      Me déconnecter
    </button>
    <button @click="deleteProfil()" id="delete-account">
      Supprimer mon compte
    </button>
  </section>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: 'AfficherProfil',
  data() {
    return {
      picture: null,
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    onFileChange(event) {
      this.picture = event.target.files[0];
      console.log(this.picture);
    },
    addPicture() {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('picture', this.picture);
      formData.append('userId', userId);
      axios.post(`http://localhost:3000/api/auth/user`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${token}`,
        },
      });
    },
    deleteProfil() {
      window.alert('Vous allez supprimer définitivement votre profil');
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      axios
        .delete(`http://localhost:3000/api/auth/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        })
        .then((location.href = '/'));
    },
    deconnect() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#profil {
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
#add-pic,
#deconnect {
  width: 30%;
  height: 30px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
#modify-pic {
  width: 50%;
  height: 30px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
#delete-account {
  width: 30%;
  height: 30px;
  background-color: rgb(253, 41, 0);
  color: white;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}

@media only screen and (max-width: 850px) {
  button {
    min-height: 50px;
    min-width: 80px;
  }
}
</style>
