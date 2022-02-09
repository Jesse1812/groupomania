<template>
  <div class="posts">
    <AfficherPosts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import AfficherPosts from '@/components/AfficherPosts.vue';

export default {
  name: 'Posts',
  components: {
    AfficherPosts,
  },
  mounted: function () {
    axios
      .get('http://localhost:3000/api/posts/', {
        timeout: 5000,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
</script>
