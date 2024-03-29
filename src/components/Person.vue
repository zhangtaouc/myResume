<template>
  <div v-if="personInfo.name" class="person" @click="showPart">
    <div class="person-content">
      <el-card style="max-width: 1500px" shadow="hover" class="person-detail">
        <template #header>
          <div class="card-header">
            <span>{{ props.title }}</span>
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
            <span>技能</span>
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
</template>
<script setup lang="ts">
import { PersonInfo, SkillList } from '@/utils/Type'
import { getPersonalInfo } from '@/utils/api'
import { ref } from 'vue'

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
    }
  })
}

initApp()
</script>
<style scoped lang="less">
.person {
  width: 100%;
  padding: 18px 0 12px;
  background-color: rgba(255, 255, 255, 0.56);
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .person-content {
    .person-detail {
      .card-box {
        display: flex;
        justify-content: space-between;
        .right {
          opacity: 0.1;
        }
      }
    }
  }
}
</style>
