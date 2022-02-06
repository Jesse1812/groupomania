<template>
  <section id="messagerie">
    <div id="messages">
      <h2>Messages ici</h2>
      <button id="Validation" type="submit">Publier</button>
    </div>
    <div id="posts">
      <div>
        <h1>Affichage des posts ici</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AfficherPosts',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#messagerie,
#posts {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  border: 2px solid black;
}
button {
  width: 25%;
  height: 40px;
  background-color: rgb(186, 219, 206);
  margin: auto;
  margin-bottom: 10px;
}
</style>
