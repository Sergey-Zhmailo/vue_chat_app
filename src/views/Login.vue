<template>
  <div class="login-page form-page">
    <div class="form-wrapper">
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/loginForm.vue';

export default {
  name: 'Login',
  components: { LoginForm },
  comments: {
    LoginForm,
  },
};
</script>

<style scoped>

</style>
