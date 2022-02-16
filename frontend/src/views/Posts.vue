<template>
  <div class="posts">
    <AfficherPosts />
  </div>
</template>

<script>
// @ is an alias to /src
import AfficherPosts from '@/components/AfficherPosts.vue';

export default {
  name: 'Posts',
  components: {
    AfficherPosts,
  },
};
</script>
