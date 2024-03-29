<template>
  <div class="common-layout">
    <el-container>
      <el-header
        ><div class="title">.</div>
        <el-avatar> 张涛 </el-avatar>
      </el-header>
      <el-container>
        <div class="page-aside">
          <div class="collapse">
            <el-icon size="30" color="black" @click="isCollapse = !isCollapse">
              <CaretLeft v-if="isCollapse" />
              <CaretRight v-else />
            </el-icon>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <el-icon><UserFilled /></el-icon>
              <template #title>个人信息</template>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><ScaleToOriginal /></el-icon>
              <template #title>项目介绍</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><Connection /></el-icon>
              <template #title>demo预览</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><Mug /></el-icon>
              <template #title>个人兴趣</template>
            </el-menu-item>
          </el-menu>
        </div>
        <el-container>
          <el-main>
            <Person title="基本信息" @show-detail="showPerson" />
            <div v-if="false" class="test">
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
                <el-button type="primary" plain @click="addStudent"
                  >添加</el-button
                >
                <el-button type="success" plain @click="getUsers"
                  >获取</el-button
                >
              </div>
              <div>
                <div>
                  <el-input
                    v-model="searchNameValue"
                    style="width: 240px"
                    size="large"
                    placeholder="请输入姓名"
                    :suffix-icon="Search"
                  /><el-button type="success" plain @click="getUserByName"
                    >查询</el-button
                  >
                  <el-button type="success" plain @click="getUserListByName"
                    >模糊查询</el-button
                  >
                </div>
                <el-table :data="userList" height="250" style="width: 550px">
                  <el-table-column prop="name" label="姓名" width="180" />
                  <el-table-column prop="address" label="地址" width="180" />
                  <el-table-column fixed="right" label="操作" width="120">
                    <template #default="scope">
                      <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="editUser(scope.$index)"
                      >
                        编辑
                      </el-button>
                      <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="deleteUser(scope.$index)"
                      >
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <div><RouterView /></div>
          </el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import {
  addUserApi,
  deleteUserApi,
  editUserApi,
  getUserByNameApi,
  getUserListApi,
  getUserListByNameApi
} from '@/utils/api'
import { ElMessageBox } from 'element-plus'
import {
  Search,
  Mug,
  Connection,
  UserFilled,
  ScaleToOriginal,
  CaretLeft,
  CaretRight
} from '@element-plus/icons-vue'
import { UserList } from '@/map/interface'
import router from '@/router'
import { messageError, messageSuccess, messageWarnDialog } from '@/utils/tips'
import Footer from '@/components/Footer.vue'
import Person from '@/components/Person.vue'
const userData = ref({
  name: '',
  address: ''
})

const searchNameValue = ref('')

const userList: Ref<UserList> = ref([])

const getUsers = () => {
  getUserListApi().then((result: any) => {
    console.log('获取到数据', result)
    userList.value = result.retData
  })
}

const showPerson = () => {
  console.log('点击')
}

const getUserByName = () => {
  if (!searchNameValue.value) {
    messageError('请输入名字')
    return
  }
  getUserByNameApi(searchNameValue.value).then((result: any) => {
    console.log('获取到数据', result)
    userList.value = result.retData
  })
}

const getUserListByName = () => {
  if (!searchNameValue.value) {
    messageError('请输入名字')
    return
  }
  getUserListByNameApi(searchNameValue.value).then((result: any) => {
    console.log('获取到数据', result)
    userList.value = result.retData
  })
}

const addStudent = () => {
  if (!userData.value.name || !userData.value.address) {
    messageError('名字和地址不能为空！')
  } else {
    addUserApi(userData.value).then(() => {
      messageSuccess('添加成功！')
      getUsers()
    })
  }
}

const deleteUser = (index: number) => {
  console.log(index)
  const name: string = userList.value[index].name
  messageWarnDialog(`确定删除【${name}】吗？`).then(() => {
    deleteUserApi(name).then(() => {
      messageSuccess('删除成功！')
      getUsers()
    })
  })
}

const editUser = (index: number) => {
  console.log(userList.value[index].name)
  ElMessageBox.prompt(
    `姓名【${userList.value[index].name}】，请输入地址`,
    '提示',
    {
      confirmButtonText: '确认修改',
      cancelButtonText: '取消'
    }
  ).then(({ value }) => {
    if (value) {
      editUserApi({
        name: userList.value[index].name,
        address: value
      }).then(() => {
        messageSuccess('修改成功！')
        getUsers()
      })
    } else {
      messageError('地址不能为空')
    }
  })
}

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

onMounted(() => {
  console.log('路由', router.currentRoute.value)
})
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
  backdrop-filter: blur(38px);
  background-color: #95d475;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #409eff;
  }
}
.page-aside {
  position: relative;
  background-color: #b3e19d;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
  .collapse {
    position: absolute;
    z-index: 100;
    width: 30px;
    right: -30px;
  }
  .el-menu {
    background: none;
  }
}
.el-container {
  background-color: #e1f3d8;
}
.el-footer {
  overflow-y: scroll;
  background-color: #d1edc4;
  height: 90px;
}
</style>
