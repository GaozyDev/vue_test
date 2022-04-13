<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      //请求前更新List的数据
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
      // xxx是要搜索的数据   ${this.keyWord}是ES6的模板字符串
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了', response.data.items)
            // this.$bus.$emit('getUsers',response.data.items)
            //请求成功后更新List的数据
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
          },
          error => {
            //请求失败更新List的数据
            console.log('请求失败了', error.message)
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})
          }
      )
    }
  }
}
</script>


<style scoped>

</style>
