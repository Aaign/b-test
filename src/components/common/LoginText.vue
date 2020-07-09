<template>
  <div>
      <van-field :label="label" :placeholder="placeholder" :type="type" :rule="rule" v-model="content" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            content:''
        }
    },
    props:[
        'label',
        'placeholder',
        'type',
        'rule'
    ],
    methods: {
        handlerulg() {
            let rule = new RegExp(this.rule)
            if(rule.test(this.content)) {
                this.$emit("inputChange", this.content)
            }
        }
    },
    watch: {
        content() {
            this.handlerulg()
        }
    }
}
</script>

<style>

</style>