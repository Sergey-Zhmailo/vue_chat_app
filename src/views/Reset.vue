<template>
  <div class="reset-page form-page">
    <div class="form-wrapper">
      <reset-form />
    </div>
  </div>
</template>

<script>
import ResetForm from '@/components/ResetForm.vue';

export default {
  name: 'Reset',
  components: { ResetForm },
  comments: {
    ResetForm,
  },
};
</script>

<style scoped>

</style>
