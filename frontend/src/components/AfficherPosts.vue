<template>
  <form @submit="submitForm" id="messagerie">
    <div id="messages">
      <input
        class="message"
        type="text"
        placeholder="Ecrivez votre message"
        v-model="messageValue"
      />
      <button id="Validation" type="submit">Publier</button>
    </div>
    <div id="posts">
      <div>
        <h1>Affichage des posts ici</h1>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AfficherPosts',
  props: {
    msg: String,
  },
  data() {
    return {
      messageValue: null,
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.messageValue);
    },
  },
};
</script>

<style scoped>
#messagerie,
#posts {
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  border: 2px solid black;
}
.message {
  width: 80%;
  height: 20px;
  margin-right: 10px;
}
button {
  width: 15%;
  height: 40px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
