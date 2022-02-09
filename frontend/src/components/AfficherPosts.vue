<template>
  <div id="messagerie">
    <div id="messages">
      <input
        class="message"
        type="text"
        placeholder="Ecrivez votre message"
        v-model="postValue"
      />
      <button id="Validation" type="submit">Publier</button>
    </div>
    <div id="posts">
      <div v-for="post in posts" :key="post.postId">
        <h3>{{ post.userId }}</h3>
        <img :src="post.picture" class="image" />
        <video :src="post.video" class="video"></video>
        <h2>{{ post.message }}</h2>
        <h4>{{ post.date }}</h4>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AfficherPosts',
  props: {
    msg: String,
  },
  data() {
    return {
      postValue: null,
      posts: null,
    };
  },
  created: function () {
    // `this` est une référence à l'instance de vm
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
};
</script>

<style scoped>
#messagerie {
  width: 58%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  border: 2px solid black;
}
#posts {
  margin: 10px;
  border: 1px solid black;
}
.message {
  width: 80%;
  height: 50px;
  margin: 10px;
}
button {
  width: 15%;
  height: 40px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
.image,
.video {
  width: 100%;
  height: 200px;
  margin: auto;
  object-fit: contain;
}
h3 {
  text-align: left;
}
</style>
