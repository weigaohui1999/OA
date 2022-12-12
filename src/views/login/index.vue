<template>
  <div>
    <div class="login">
      <div class="login_title">
        <span>欢迎访问OA系统</span>
      </div>
      <el-form class="login_fields" ref="loginForm" :model="loginForm" :rules="loginRules" auto-complete="on" label-position="left">
        <el-form-item class="login_fields__user" prop="">
          <div class="icon">
            <img src="./img/user_icon_copy.png">
          </div>
          <el-input placeholder="请输入用户名" type="text" v-model="loginForm.account" />
        </el-form-item>
        <el-form-item class="login_fields__password">
          <div class="icon">
            <img src="./img/lock_icon_copy.png">
          </div>
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" />
        </el-form-item>
        <div class="login_fields__submit">
          <el-button size="medium" type="primary" :loading="loading" @click="sign">登录</el-button>
        </div>
      </el-form>
    </div>
    <canvas id="cloud-canvas" />
  </div>
</template>
<script>
import * as klouds from 'klouds'
export default {
  name: "Login",
  data() {
    return {
      clouds: null,
      loading: false,
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {}
    }
  },
  mounted() {
    this.initClouds()
  },
  methods: {
    initClouds() {
      this.clouds = klouds.create({
        selector: '#cloud-canvas',
        speed: 1,
        layerCount: 7,
      })
    },
    sign() {

    }
  }
}
</script>

<style scoped lang="less">
 #cloud-canvas {
   position: absolute;
   z-index: 0;
   width: 100vw;
   height: 100vh;
 }

.login {
  box-sizing: content-box;
  opacity: 1;
  top: 20px;
  transform: rotateX(0deg);
  z-index: 1;
  width: 240px;
  border-top: 2px solid #D8312A;
  height: 300px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  padding: 100px 40px 40px 40px;
  background: #35394abc;
  background: linear-gradient(45deg, #35394abc 0%, #1f222eee 100%);
  .login_title {
    color: #afb1be;
    height: 60px;
    text-align: center;
    font-size: 20px;
  }
  .login_fields {
    height: 208px;
    position: absolute;
    left: 0;
    right: 0;
    .el-form-item {
      margin-bottom: 0;
    }
    .icon {
      position: absolute;
      z-index: 1;
      left: 36px;
      top: 8px;
      opacity: .5;
    }
    .el-input {
      box-sizing: content-box;
      width: 190px;
      margin-top: -2px;
      background: #35394a72;
      left: 0;
      padding: 10px 65px;
      box-shadow: none;
      /deep/.el-input__inner {
        background: transparent;
        border: none;
        outline: none;
        color: #afb1be;
      }
    }
    .el-input[type='password'] {
      color: #DC6180 !important;
    }
    .login_fields__user,
    .login_fields__password {
      position: relative;
    }
    .login_fields__submit {
      position: relative;
      top: 35px;
      left: 10%;
      width: 80%;
      right: 0;
    }
  }
}
</style>