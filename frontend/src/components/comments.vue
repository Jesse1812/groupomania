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
    <div v-for="item in comments" :key="item.commentId">
      <div class="comments">
        <button
          @click="deleteComment(item.commentId, item.userId)"
          v-if="isDeleteComment(item.userId)"
        >
          X
        </button>
        <h3>{{ item.nom }} {{ item.prenom }}</h3>
        <p>{{ item.content }}</p>
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
      token: localStorage.getItem('token'),
      userIdConnected: localStorage.getItem('userId'),
      isAdmin: parseInt(localStorage.getItem('admin')),
    };
  },
  methods: {
    ...mapActions(['submitComment']),

    addComment() {
      this.submitComment({
        content: this.commentValue,
        postId: this.postId,
        userId: this.userIdConnected,
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
      return parseInt(this.userIdConnected) === userId || this.isAdmin === 1
        ? true
        : false;
    },
    deleteComment(commentId) {
      axios
        .delete(`http://localhost:3000/api/comments/${commentId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          this.comments = this.comments.filter(
            (comment) => comment.commentId !== commentId
          );
        });
    },
  },

  mounted: function () {
    const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:3000/api/comments/${this.postId}`, {
        headers: {
          authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
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
