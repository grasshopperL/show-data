<template>
  <el-button @click="getAllData">click to send request</el-button>
</template>

<script>
  import {getData}  from "@/api/userQuery/actions";
  export default {
    name: 'BigDataShow',
    data() {},
    methods: {
      getAllData() {
        getData().then((res) => {
          console.log(res)
        })
      }
    },
    mounted() {
      this.getAllData();
    }
  }
</script>

<style scoped>

</style>
