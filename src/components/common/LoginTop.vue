<template>
  <div class="login_top">
      <div></div>
      <div>{{middleTop}}</div>
      <div><slot name="right" /></div>
  </div>
</template>

<script>
export default {
    props: [
        'middleTop'
    ]
}
</script>
<style lang="less" scoped>
.login_top{
    height: 12.5vw;
    background-color: #fff;
    display: flex;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;
    }
}
</style>