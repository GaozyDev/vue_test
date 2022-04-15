<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods:{
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    test() {
      //小括号里写正数，就是前进几次，写负数就是后退几次，，比如写3，就是前进三次
      this.$router.go(3)
    }
  }
}
</script>