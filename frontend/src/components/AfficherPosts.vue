<template>
  <form enctype="multipart/form-data" id="messagerie">
    <h1>Messagerie</h1>
    <div id="messages">
      <input
        class="message"
        type="text"
        placeholder="Ecrivez votre message"
        v-model="postValue"
      />
      <input type="file" @change="onFileChange" />
      <button @click="addPost" id="Validation" type="submit">Publier</button>
    </div>
    <div v-for="post in posts" :key="post.postId">
      <div id="posts">
        <button
          class="erase"
          @click="deletePost(post.postId, post.userId)"
          v-if="isDeletePost(post.userId)"
        >
          X Effacer
        </button>
        <h3>
          {{ post.nom }}
          {{ post.prenom }}
        </h3>
        <img v-if="post.picture" :src="post.picture" class="image" />
        <h2>{{ post.message }}</h2>
        <hr />
        <comments :postId="post.postId" />
      </div>
    </div>
  </form>
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
  data() {
    return {
      postValue: null,
      posts: null,
      token: localStorage.getItem('token'),
      userIdConnected: localStorage.getItem('userId'),
      isAdmin: parseInt(localStorage.getItem('admin')),
      picture: null,
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

    onFileChange(event) {
      console.log('picture', event.target.files[0]);
      this.picture = event.target.files[0];
    },

    addPost: function () {
      const userId = localStorage.getItem('userId');
      this.submitPost({
        message: this.postValue,
        picture: this.picture,
        userId: parseInt(userId),
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
    isDeletePost(userId) {
      return parseInt(this.userIdConnected) === userId || this.isAdmin === 1
        ? true
        : false;
    },
    deletePost(postId, userId) {
      axios
        .delete(`http://localhost:3000/api/posts/${postId}`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.token}`,
            userId,
          },
        })
        .then(() => {
          this.posts = this.posts.filter((post) => post.postId !== postId);
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
.erase {
  background-color: orangered;
  color: white;
  height: 20px;
  width: 15%;
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
