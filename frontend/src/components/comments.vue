<template>
  <div>
    <p>Commentaires</p>
    <!-- <input
      class="message"
      type="text"
      placeholder="Ecrivez votre message"
      v-model="postValue"
    /> -->
    <!-- <button @click="addPost" id="Validation" type="submit">Publier</button> -->
    <div v-for="comment in comments" :key="comment.commentId">
      <div class="comments">
        <!-- <button v-if="isDeleteComment(comment.userId)">X</button> -->
        <!-- div button envoi commentId avec axios pour suppression -->
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { mapActions } from 'vuex';
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
    };
  },
  // methods: {
  //   isDeleteComment(userId) {
  //     const userIdConnected = localStorage('userId');
  //     return userIdConnected === userId ? true : false;
  //   },
  // },
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
  border: 1px solid black;
  text-align: left;
}
</style>
