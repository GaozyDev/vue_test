<template>
  <div class="app">
    <h1>{{ msg }}  学生名字为:{{studentName}}</h1>

    <!--    通过父组件给子组件传递函数类型的props实现:子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>

    <!--    通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法,使用@或v-on)-->
    <!--    <Student v-on:atguigu="getStudentName"/>-->
<!--        <Student @atguigu="getStudentName" @demo="m1"/>-->

    <!--    通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法,使用ref)-->
        <Student ref="student" @click.native="show"/>

  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好啊,',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名:', name)
    },
    //params(参数)
    // getStudentName(name,...params) {
    //   console.log('App收到了学生名:', name,params)
    //   this.studentName = name
    // },
    m1() {
      console.log('demo事件被触发了!')
    },
    show() {
      alert(123)
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.$refs.student.$on('atguigu', this.getStudentName)
  //   }, 3000)
  // }
  mounted() {
    this.$refs.student.$on('atguigu',(name,...params)=> {
      console.log('App收到了学生名:', name,params)
      //注意：通过  this.$refs.xxx.$on('atguigu',回调)   绑定自定义事件时，
      // 回调要么配置在methods中,要么用箭头函数，否则this指向会出问题！
      // console.log(this)
      this.studentName = name
    }) //绑定自定义事件
    // 触发一次
    // this.$refs.student.$once('atguigu', this.getStudentName) //绑定自定义事件(一次性)
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
