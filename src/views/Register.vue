<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot='right' style="font-size:2.778vw" @click="$router.push('/login')">登录</div>
    </login-top>
    <login-text label="姓名" rule="^.{4,10}$" style="margin: 4.167vw 0" placeholder="请输入姓名" @inputChange="res => name = res"></login-text>
    <login-text label="账号" rule="^.{4,10}$" placeholder="请输入账号" @inputChange="res => username = res"></login-text>
    <login-text label="密码" rule="^.{4,10}$" type="password" placeholder="请输入密码" @inputChange="res => password = res"></login-text>

    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginButton.vue'
export default {
  data() {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    async registerSubmit() {
      if(this.name != '' && this.username != '' && this.password != '') {

        const res = await this.$http.post('/regiset', {
          name: this.name,
          username: this.username,
          password: this.password
        });
        console.log(res);
      }else {
        this.$toast.fail("格式不正确！");
      }
    }
  }
}
</script>

<style>

</style>