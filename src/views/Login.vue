<template>
  <div>
    <login-top middleTop="登录bilibili">
        <div slot="right" style="font-size:2.778vw" @click="$router.push('/register')">注册</div>
    </login-top>
    <login-text label="账号" rule="^.{4,10}$" style="margin: 4.167vw 0" placeholder="请输入账号" @inputChange="res => username = res"></login-text>
    <login-text label="密码" rule="^.{4,10}$" type="password" placeholder="请输入密码" @inputChange="res => password = res"></login-text>

    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginButton.vue'
export default {
    data(){
        return {
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
        registerSubmit() {

        }
    }
}
</script>

<style lang="less" >
</style>