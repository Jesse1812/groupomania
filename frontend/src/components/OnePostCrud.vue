<template>
  <div id="messages">
    <button v-if="authorized && !modify" @click="modify = true">
      Modifier
    </button>
    <button v-if="modify" @click="modifyOnePost()">Publier</button>
    <button v-if="modify" @click="deleteOnePost()">Supprimer</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OnePost',
  props: {
    msg: String,
  },
  data() {
    return {
      modifiedContent: '',
      post: [],
      authorized: false,
      modify: false,
    };
  },
  mounted() {
    this.getOnePost();
  },
  methods: {
    getOnePost() {
      const postId = this.$route.params.id;

      axios
        .get(`http://localhost:3000/api/posts/${postId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((res) => {
          this.post = res.data[0];
          if (this.$user.userId === this.post.userId || this.$user.admin == 1) {
            this.authorized = true;
          } else {
            this.authorized = false;
          }
        });
    },
    deleteOnePost() {
      const postId = this.$route.params.id;

      axios
        .delete(`http://localhost:3000/api/posts/${postId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((location.href = '/'));
    },
    modifyOnePost() {
      const postId = this.$route.params.id;
      const content = this.modifiedContent;

      axios
        .put(
          `http://localhost:3000/api/posts/${postId}`,
          {
            postId,
            content,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((location.href = '/'));
    },
  },
};
</script>
