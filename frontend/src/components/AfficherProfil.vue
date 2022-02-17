<template>
  <section id="profil">
    <h1>Photo de profil</h1>
    <img
      v-if="user && user[0].photo"
      :src="user[0].photo"
      id="profil-image"
      class="image"
      alt="image de profil"
    />
    <!-- <div id="colonne"> -->
    <!-- <h2>Nom: {{ userInfo && userInfo.firstName }}</h2>
      <h2>Prénom: {{ userInfo && userInfo.lastName }}</h2>
    </div> -->
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
      user: null,
      userId: localStorage.getItem('userId'),
      token: localStorage.getItem('token'),
    };
  },
  mounted: function () {
    axios
      .get(`http://localhost:3000/api/auth/${this.userId}`, {
        headers: {
          authorization: 'Bearer ' + this.token,
        },
      })
      .then((res) => (this.user = res.data))
      .catch((err) => console.log('Error', err));
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    onFileChange(event) {
      this.picture = event.target.files[0];
    },
    addPicture() {
      const formData = new FormData();
      formData.append('picture', this.picture);
      formData.append('userId', this.userId);
      axios
        .post(`http://localhost:3000/api/auth/user`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: `Bearer ${this.token}`,
          },
        })
        .then(() =>
          axios
            .get(`http://localhost:3000/api/auth/${this.userId}`, {
              headers: {
                authorization: 'Bearer ' + this.token,
              },
            })
            .then((res) => (this.user = res.data))
            .catch((err) => console.log('Error', err))
        );
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
#add-pic,
#deconnect {
  width: 30%;
  height: 30px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
#modify-pic {
  width: 40%;
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
  #profil {
    width: 90%;
  }
}
</style>
