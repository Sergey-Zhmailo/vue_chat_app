<template>
  <div class="home">
    Home
    <ElButton type="danger" @click="onclick">Logout</ElButton>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('authStore', ['logout']),
    async onclick() {
      await this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
