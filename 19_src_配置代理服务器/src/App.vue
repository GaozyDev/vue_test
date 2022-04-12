<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <br>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods:{
    getStudents() {
      //then后面跟的response和error是axios.get请求发送后返回来的两个状态对象，
      // response是成功，error是失败。response.data是请求成功返回来的数据
      //error.message是请求失败返回来的数据
      //   /api是请求走代理服务器的前缀，，紧跟在端口号后面，，，如果你的前缀是/atguiug，，那8080后面就写/atguigu
      axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    },

    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    },

  }
}
</script>

