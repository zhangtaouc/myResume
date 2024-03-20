<template>
  <p>{{ title }}</p>
  <div class="operate-box">
    <div class="box">
      <div class="name">id:</div>
      <input type="text" v-model="userData.id" />
    </div>
    <div class="box">
      <div class="name">username:</div>
      <input type="text" v-model="userData.username" />
    </div>
    <div class="box">
      <div class="name">password:</div>
      <input type="text" v-model="userData.password" />
    </div>
  </div>
  <p>
    <input type="submit" value="查询" @click="getUse" />
    <input type="submit" value="添加" @click="addUser" />
  </p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useBaseStore } from '@/store/base'
import { getUserList } from '@/utils/api'
const store = useBaseStore()
const title = ref('这是首页')
const userData = ref({
  id: '',
  password: '',
  username: ''
})

const getUse = () => {
  getUserList().then(data => {})
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
