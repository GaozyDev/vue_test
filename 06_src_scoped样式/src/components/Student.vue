<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2 class="test">学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  }
}
</script>

//此处不写lang="less"的意思，默认就是CSS,,scoped意思是让样式在局部生效
<style lang="less" scoped>
  .demo {
    background-color: pink;
    .test{
      font-size: 40px;
    }
  }
</style>

