<template>
  <div>
    <p>Commentaires</p>
    <input
      class="message"
      type="text"
      placeholder="Ecrivez votre commentaire"
      v-model="commentValue"
    />
    <button @click="addComment" id="validation" type="submit">Publier</button>
    <div v-for="comment in comments" :key="comment.commentId">
      <div class="comments">
        <button v-if="isDeleteComment(comment.userId)">X</button>
        <!-- div button envoi commentId avec axios pour suppression -->
        <h3>{{ comment.userId }}</h3>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: 'comments',
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comments: null,
      commentValue: null,
    };
  },
  methods: {
    ...mapActions(['submitComment']),

    addComment() {
      this.submitComment({
        content: this.commentValue,
        postId: this.postId,
      }).then(() => {
        const token = localStorage.getItem('token');
        axios
          .get(`http://localhost:3000/api/comments/${this.postId}`, {
            headers: {
              authorization: 'Bearer ' + token,
            },
          })
          .then((res) => {
            this.comments = res.data;
          });
      });
    },
    isDeleteComment(userId) {
      let userIdConnected = '';
      if (this.$store.state.userInfo) {
        userIdConnected = this.$store.state.userInfo.userId;
      }
      return userIdConnected === userId ? true : false;
    },
  },

  mounted: function () {
    console.log('salluttt', this.postId);
    const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:3000/api/comments/${this.postId}`, {
        headers: {
          authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log('hola', res.data);
        this.comments = res.data;
      })
      .catch((err) => console.log('stop', err));
  },
};
</script>

<style scoped>
.comments {
  background-color: lightgray;
  border: 1px solid black;
  text-align: left;
}
input {
  width: 80%;
}
#validation {
  margin-bottom: 5px;
}
h3 {
  color: blueviolet;
}
</style>
