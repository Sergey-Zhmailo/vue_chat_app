<template>
  <div class="reset-form">
    <h2 class="form-title">Reset password</h2>
    <p>Enter your email, and we send new password</p>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="ResetForm"
    >
      <ElFormItem
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email" placeholder="Email"></ElInput>
        <i class="el-icon-message"></i>
      </ElFormItem>
      <ElButton
        type="success"
        plain
        round
        native-type="submit"
      >
        Reset password</ElButton>
    </ElForm>
    <router-link :to="{ name: 'Login'}">
      <ElLink type="primary">Return to Login page</ElLink>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ResetForm',
  data: () => ({
    formData: {
      email: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please input adress',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email adress',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    // ...mapGetters('authStore', ['loginInProgress']),
  },
  methods: {
    ...mapActions('authStore', ['resetPassword']),
    onSubmit() {
      this.$refs.ResetForm.validate((isValid) => {
        if (!isValid) return;
        // console.log(this.formData.email);
        this.resetPassword({ ...this.formData });
      });
      console.log(this.$refs.ResetForm);
    },
  },
};
</script>
