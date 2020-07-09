<template>
  <div>
    <van-tabs v-model="active" swipeable sticky animated title-active-color="#F87299" :border="false">
      <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: [

  ]
}
</script>

<style lang='less'>
  van-tabs{
    border: none;
  }
</style>