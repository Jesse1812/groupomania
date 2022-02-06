<template>
  <div class="profil">
    <AfficherProfil msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import AfficherProfil from '@/components/AfficherProfil.vue';

export default {
  name: 'Profil',
  components: {
    AfficherProfil,
  },
};
</script>
