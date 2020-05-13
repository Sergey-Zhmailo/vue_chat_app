<template>
  <div class="login-form">
    <h1>Welcome to live chat!</h1>
    <h2 class="form-title">Login</h2>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="LoginForm"
    >
      <ElFormItem
        prop="email"
        size="small"
      >
        <ElInput v-model="formData.email" placeholder="Email"></ElInput>
        <i class="el-icon-message"></i>
      </ElFormItem>
      <ElFormItem
        prop="password"
        size="small"
      >
        <ElInput
          v-model="formData.password"
          type="password"
          placeholder="Password"
          :show-password="true"
        >
        </ElInput>
        <i class="el-icon-lock"></i>
      </ElFormItem>
      <div>
        <router-link :to="{ name: 'Reset'}">
          <ElLink type="info">Forgot password? Reset password</ElLink>
        </router-link>
      </div>
      <ElButton
        type="success"
        plain
        round
        native-type="submit"
        :loading="loginInProgress"
      >
        Login</ElButton>
    </ElForm>
    <router-link :to="{ name: 'SignUp'}">
      <ElLink type="primary">Don`t have account? Signup/</ElLink>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

// mapActions('authStore', ['login'])
// оператор ... spread или rest

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
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
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters('authStore', ['loginInProgress']),
  },
  methods: {
    ...mapActions('authStore', ['login']), // вернет объект {login: f()}
    // передаст login() {}
    onSubmit() {
      this.$refs.LoginForm.validate((isValid) => {
        if (!isValid) return;
        this.login({ ...this.formData });
        // console.log({ ...this.formData });
      });
      console.log(this.$refs.LoginForm);
    },
  },
};
</script>

<style scoped>

</style>
