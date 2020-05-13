<template>
  <div class="signup-form">
    <h1>Register on Chat APP</h1>
    <h2 class="form-title">Sign up</h2>
    <ElForm
      :model="formData"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      ref="SignUpForm"
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
      <ElFormItem
        prop="password_repeat"
        size="small"
      >
        <ElInput
          v-model="formData.password_repeat"
          type="password"
          placeholder="Repeat password"
          :show-password="true"
        >
        </ElInput>
        <i class="el-icon-lock"></i>
      </ElFormItem>
      <ElButton
        type="success"
        plain
        round
        native-type="submit"
      >
        Sign up</ElButton>
    </ElForm>
    <router-link :to="{ name: 'Login'}">
      <ElLink type="primary">Return to Login page</ElLink>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUpForm',
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'));
      } else if (value !== this.formData.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        email: '',
        password: '',
        password_repeat: '',
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
        password_repeat: [
          {
            required: true,
            validator: validatePass2,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters('authStore', ['loginInProgress']),
  },
  methods: {
    ...mapActions('authStore', ['signUp']),
    onSubmit() {
      this.$refs.SignUpForm.validate((isValid) => {
        if (!isValid) return;
        // console.log(this.formData.email);
        this.signUp({ ...this.formData });
      });
      console.log(this.$refs.ResetForm);
    },
  },
};
</script>
