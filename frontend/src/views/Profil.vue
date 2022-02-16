<template>
  <div class="profil">
    <AfficherProfil />
  </div>
</template>

<script>
// import axios from 'axios';
// @ is an alias to /src
import AfficherProfil from '@/components/AfficherProfil.vue';

export default {
  name: 'Profil',
  components: {
    AfficherProfil,
  },
};
</script>
