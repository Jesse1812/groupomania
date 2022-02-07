<template>
  <section id="profil">
    <h1>Profil</h1>
    <div id="description">
      <img
        id="profil-image"
        src="../assets/images/profile.png"
        alt="image de profil"
      />
      <div id="colonne">
        <h2>Nom</h2>
        <h2>Prénom</h2>
      </div>
    </div>
    <button id="modify-account" type="submit">Modifier mon compte</button>
    <button id="delete-account" type="submit">Supprimer mon compte</button>
  </section>
</template>

<script>
export default {
  name: 'AfficherProfil',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#profil {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  border: 2px solid black;
}
#profil-image {
  width: 30%;
  height: 30%;
  margin: auto;
}
#description {
  display: flex;
  flex-direction: row;
  width: 80%;
}
#modify-account {
  width: 30%;
  height: 30px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 20px;
}
#delete-account {
  width: 30%;
  height: 30px;
  background-color: rgb(253, 41, 0);
  color: white;
  margin: auto;
  margin-bottom: 10px;
}
</style>
