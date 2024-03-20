<template>
  <div class="common-layout">
    <el-container>
      <el-header>{{ title }}</el-header>
      <el-container>
        <el-aside width="100px">Aside</el-aside>
        <el-container>
          <el-main>
            <div>
              <el-input
                v-model="userData.name"
                style="width: 240px"
                placeholder="请输入名字"
                clearable
              />
              <el-input
                v-model="userData.address"
                style="width: 240px"
                placeholder="请输入地址"
                clearable
              />
              <el-button type="primary" plain>添加</el-button>
              <el-button type="success" plain @click="getUsers">获取</el-button>
            </div>
            <div>
              <el-table :data="userList" height="250" style="width: 550px">
                <el-table-column prop="name" label="姓名" width="180" />
                <el-table-column prop="address" label="地址" width="180" />
                <el-table-column fixed="right" label="操作" width="120">
                  <template #default="scope">
                    <el-button
                      link
                      type="primary"
                      size="small"
                      @click.prevent="deletuUser(scope.$index)"
                    >
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import { getUserList } from '@/utils/api'
import { User } from '@/map/interface'
const title = ref('这是首页')
const userData = ref({
  name: '',
  address: ''
})

const userList: Ref<Array<User>> = ref([])

const getUsers = () => {
  getUserList().then((result: any) => {
    console.log('获取到数据', result)
    userList.value = result.retData
  })
}

const addStudent = () => {
  const data = userData.value
  console.log(data)
}

const deletuUser = (index: number) => {
  console.log(index)
  addStudent()
}
</script>

<style scoped lang="less">
.common-layout {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #95d475;
}
.el-aside {
  background-color: #b3e19d;
}
.el-container {
  background-color: #e1f3d8;
}
.el-footer {
  background-color: #d1edc4;
}
</style>
