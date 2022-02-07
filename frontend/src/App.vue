<template>
  <div id="app">
    <div>
      <header>
        <img
          id="logo"
          src="./assets/images/icon-left-font.png"
          alt="logo Groupomania"
        />
      </header>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/profil">Profil</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  width: 30%;
  display: flex;
  text-align: center;
  margin: auto;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Media queries */
@media only screen and (max-width: 600px) {
  button {
    width: 80%;
  }
}

@media only screen and (max-width: 375px) {
  #sign-in {
    display: block;
  }
  button {
    height: 100%;
    width: 100%;
  }
}
</style>
