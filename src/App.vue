<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </div>-->
    <Notifyer></Notifyer>
    <router-view/>
  </div>
</template>

<script>
import Notifyer from '@/components/Notification.vue';

export default {
  components: {
    Notifyer,
  },
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ecf0f3;
  color: #555555;
}
#app h1 {
  font-weight: normal;
  margin-bottom: 20px;
  color: #67C23A;
}
.form-page {
  height: 100vh;
  min-height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-wrapper {
  background-color: #ecf0f3;
  width: 400px;
  max-width: 100%;
  border-radius: 40px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  padding: 30px 20px;
  text-align: center;
}
.form-title {
  font-size: 25px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 18px;
}
.el-form-item__content {
  position: relative;
}
.el-form-item__content i {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 20px;
}
.form-wrapper .el-input__suffix {
  right: 60px;
}
.form-wrapper .el-form-item__error {
  width: 100%;
}
  input[type="text"], input[type="password"] {
    padding: 15px 30px 15px 50px;
    height: auto !important;
    border-radius: 40px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
    background-color: #ecf0f3;
    border: none;
  }
.form-wrapper button{
    margin: 30px 0 20px 0;
  }
</style>
