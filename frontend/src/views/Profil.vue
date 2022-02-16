<template>
  <div class="profil">
    <AfficherProfil />
  </div>
</template>

<script>
// @ is an alias to /src
import AfficherProfil from '@/components/AfficherProfil.vue';

export default {
  name: 'Profil',
  components: {
    AfficherProfil,
  },
};
</script>
