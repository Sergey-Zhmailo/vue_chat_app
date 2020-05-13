<template>
  <div class="singup-page form-page">
    <div class="form-wrapper">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: { SignUpForm },
};

</script>
