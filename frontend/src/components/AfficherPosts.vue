<template>
  <div id="messagerie">
    <div id="messages">
      <input
        class="message"
        type="text"
        placeholder="Ecrivez votre message"
        v-model="postValue"
      />
      <button @click="addPost" id="Validation" type="submit">Publier</button>
    </div>
    <div id="posts">
      <div v-for="post in posts" :key="post.postId">
        <h3>
          {{ userInfo && userInfo.firstName }}
          {{ userInfo && userInfo.lastName }}
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
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
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted: function () {
    // `this` est une référence à l'instance de vm
    const token = localStorage.getItem('token');
    console.log('hi !');
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
      console.log(this.userInfo);
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
