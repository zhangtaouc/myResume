<template>
  <div v-if="personInfo.name" class="person" @click="showPart">
    <div class="person-content">
      <el-card style="max-width: 1500px" shadow="hover" class="person-detail">
        <template #header>
          <div class="card-header">
            <span style="margin-right: 10px">{{ props.title }}</span>
            <el-icon color="#E6A23C"><Avatar /></el-icon>
          </div>
        </template>
        <div class="card-box">
          <div class="left">
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">姓名：</el-text>
              <span>{{ personInfo.name }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">年龄：</el-text>
              <span>{{ personInfo.age }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">学校：</el-text>
              <span>{{ personInfo.school }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">专业：</el-text>
              <span>{{ personInfo.major }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">毕业：</el-text>
              <span>{{ personInfo.graduationYear }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">工龄：</el-text>
              <span>{{ personInfo.workTotlTime }}</span>
            </p>
            <p class="text item">
              <el-text class="mx-1" type="primary" size="large">联系：</el-text>
              <span
                >13184136227<el-text class="mx-1" type="primary"> / </el-text
                >3131966940@qq.com</span
              >
            </p>
          </div>
          <div class="right">
            <el-image
              style="
                boxshadow: var(--el-box-shadow-light);
                width: 100px;
                height: 100px;
              "
              :src="personInfo.pictureUrl"
              fit="contain"
            />
          </div>
        </div>
      </el-card>
      <el-card style="max-width: 1500px" shadow="hover" class="person-detail">
        <template #header>
          <div class="card-header">
            <span style="margin-right: 10px">技能</span>
            <el-icon color="#67C23A"><Promotion /></el-icon>
          </div>
        </template>
        <div class="skill-detail">
          <p v-for="(skill, index) in mySkills" :key="index" class="text item">
            <el-text class="mx-1" type="primary" size="large" tag="b"
              >{{ index + 1 }}、</el-text
            >
            <el-text class="mx-1" size="large">{{ skill.detail }}</el-text>
          </p>
        </div>
      </el-card>
    </div>
  </div>
  <div v-else class="person"><el-empty description="数据加载中...." /></div>
</template>
<script setup lang="ts">
import { PersonInfo, SkillList } from '@/utils/Type'
import { Promotion, Avatar } from '@element-plus/icons-vue'
import { getPersonalInfo } from '@/utils/api'
import { ref } from 'vue'
import { messageSuccess } from '@/utils/tips'

defineOptions({ name: 'Person' })

const personInfo = ref({} as PersonInfo)

const mySkills = ref<SkillList>([])

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['showDetail'])
const showPart = () => emit('showDetail')

const initApp = () => {
  getPersonalInfo().then((result: any) => {
    console.log('个人信息', result)
    const data = result.retData
    if (data) {
      personInfo.value = data.me
      mySkills.value = data.mySkills
      setTimeout(() => {
        messageSuccess('数据加载成功')
      }, 800)
    }
  })
}

initApp()
</script>
<style scoped lang="less">
.person {
  height: 100%;
  box-sizing: content-box;
  width: 100%;
  padding: 18px 0 12px;
  background-color: rgba(255, 255, 255, 0.56);
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .person-content {
    height: 100%;
    .person-detail {
      .card-header {
        font-size: 20px;
        color: #000;
        font-weight: bold;
      }
      .card-box {
        display: flex;
        justify-content: space-between;
        .right {
        }
      }
    }
  }
}
</style>
