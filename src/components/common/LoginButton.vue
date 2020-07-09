<template>
  <div class="login_btn_p" @click="registerClick">
      <div class="login_btn">{{btntext}}</div>
  </div>
</template>

<script>
export default {
    props: [
        'btntext',
    ],
    methods: {
        registerClick() {
            this.$emit("registerSubmit");
        }
    }
}
</script>

<style lang="less" scoped>
    .login_btn_p{
        padding: 4.167vw 2.778vw;
    }
    .login_btn{
        height: 12.222vw;
        background-color: #ff9db5;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.389vw;
        font-size: 4.444vw;
    }
</style>