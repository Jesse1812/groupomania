<template>
  <div id="messagerie">
    <h1>Messagerie</h1>
    <div id="messages">
      <input
        class="message"
        type="text"
        placeholder="Ecrivez votre message"
        v-model="postValue"
      />
      <p>Ajouter une photo</p>
      <p>Ajouter un .gif</p>
      <button @click="addPost" id="Validation" type="submit">Publier</button>
    </div>
    <div v-for="post in posts" :key="post.postId">
      <div id="posts">
        <h3>
          {{ post.nom }}
          {{ post.prenom }}
        </h3>
        <img
          v-if="post.picture !== 'undefined'"
          :src="post.picture"
          class="image"
        />
        <div v-if="post.video !== 'undefined'">
          <iframe :src="post.video" class="gif"></iframe>
        </div>
        <h2>{{ post.message }}</h2>
        <hr />
        <comments :postId="post.postId" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import comments from './comments.vue';
export default {
  name: 'AfficherPosts',
  components: {
    comments,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      postValue: null,
      posts: null,
    };
  },
  mounted: function () {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3000/api/posts/', {
        headers: {
          authorization: 'Bearer ' + token,
        },
      })
      .then((res) => (this.posts = res.data.result))
      .catch((err) => console.log('stop', err));
  },
  methods: {
    ...mapActions(['submitPost']),

    addPost: function () {
      this.submitPost({
        message: this.postValue,
        userId: this.userInfo.userId,
      }).then(() => {
        const token = localStorage.getItem('token');
        axios
          .get('http://localhost:3000/api/posts/', {
            headers: {
              authorization: 'Bearer ' + token,
            },
          })
          .then((res) => (this.posts = res.data.result))
          .catch((err) => console.log('stop', err));
      });
    },
  },
};
</script>

<style scoped>
#messagerie {
  width: 58%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  border: 2px solid black;
}
h1 {
  color: black;
}
#posts {
  margin: 10px;
  border: 1px solid black;
}
.comments {
  border: 1px solid black;
  text-align: left;
}
.message {
  width: 80%;
  height: 50px;
  margin: 10px;
}
button {
  width: 20%;
  height: 40px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
.image,
.gif {
  width: 50%;
  height: 200px;
  margin: auto;
  object-fit: contain;
}
h3 {
  text-align: left;
}

@media only screen and (max-width: 600px) {
  .image,
  .gif {
    width: 50%;
    height: 100px;
    margin: auto;
    object-fit: contain;
  }
  button {
    min-width: 50px;
  }
}
</style>
