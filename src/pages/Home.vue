<template>
  <p>{{ title }}</p>
  <div class="operate-box">
    <div class="box">
      <div class="name">id:</div>
      <input v-model="userData.id" type="text" />
    </div>
    <div class="box">
      <div class="name">username:</div>
      <input v-model="userData.username" type="text" />
    </div>
    <div class="box">
      <div class="name">password:</div>
      <input v-model="userData.password" type="text" />
    </div>
  </div>
  <p>
    <input type="submit" value="查询" @click="getUse" />
    <input type="submit" value="添加" @click="addUser" />
  </p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getUserList } from '@/utils/api'
const title = ref('这是首页')
const userData = ref({
  id: '',
  password: '',
  username: ''
})

const getUse = () => {
  getUserList()
}

const addUser = () => {
  const data = userData.value
  console.log(data)
}
</script>

<style scoped lang="less">
.box {
  display: flex;
  margin-top: 10px;
  .name {
    width: 90px;
    text-align: right;
  }
  input {
    height: 20px;
  }
}
</style>
