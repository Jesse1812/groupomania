<template>
  <div class="home">
    <Accueil msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue';

export default {
  name: 'Home',
  components: {
    Accueil,
  },
};
</script>
