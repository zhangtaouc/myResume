<template>
  <div class="My-project">
    <div class="title-box">
      <div>我的项目</div>
      <div>
        <span class="desc">简略</span
        ><el-switch
          v-model="isBrief"
          style="--el-switch-on-color: #13ce66"
          inline-prompt
          @change="changeStyle"
        />
      </div>
    </div>
    <div v-if="!isBrief" class="project-collapse">
      <el-collapse v-model="activeIndex" accordion>
        <el-collapse-item
          v-for="(project, index) in projects"
          :key="index"
          :name="`${index + 1}`"
        >
          <template #title>
            <el-icon class="header-icon" color="#66b1ff">
              <component :is="project.component" />
            </el-icon>
            <span class="project-name">{{ project.name }}</span>
          </template>
          <div class="collapse-content">
            {{ project.desc }}
            <div
              v-if="project.project_url"
              class="show-detail"
              @click="goPage(project.project_url)"
            >
              <el-button type="success" round>查看</el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div v-else class="project-brief">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <div class="detail">
          <div class="product-icon">
            <el-image
              style="width: 60px; height: 90px"
              :src="project.project_icon"
              fit="contain"
            />
          </div>
          <div class="product-content">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-desc">
              {{ project.desc }}
            </div>
          </div>
        </div>
        <div
          v-if="project.project_url"
          class="btn"
          @click="goPage(project.project_url)"
        >
          <el-button type="success" plain size="small">查看</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'

import {
  Search,
  Eleme,
  Coin,
  Drizzling,
  MessageBox,
  Menu,
  Notebook,
  Mic
} from '@element-plus/icons-vue'
import { useBaseStore } from '@/store/base'
import { Project } from '@/utils/Type'
import { goExtraPage } from '@/utils/tools'
defineOptions({ name: 'Project' })

const isBrief = ref(false)

const activeIndex = ref('1')

interface MyProject extends Project {
  component?: any
}

const components = [
  Search,
  Eleme,
  Coin,
  Drizzling,
  MessageBox,
  Menu,
  Notebook,
  Mic
]

const projects = computed((): MyProject[] => {
  const list = useBaseStore().userProject
  const targetList: MyProject[] = []
  let index = 0
  list.forEach(project => {
    const target: MyProject = project
    target.component = shallowRef(components[index])
    targetList.push(target)
    index++
  })
  return targetList
})

const changeStyle = () => {
  console.log(isBrief)
}

const goPage = (url: string) => {
  goExtraPage(url)
}
</script>
<style scoped lang="less">
[data-theme='light']:root {
}
.My-project {
  position: relative;
  margin: 0 20px 0;
  box-sizing: border-box;
  padding: 30px 20px;
  border-radius: 12px;
  background: var(--white-98);
  height: 100%;

  overflow-y: scroll;
  .title-box {
    color: var(--black);
    font-family: var(--header-font);
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desc {
      color: var(--black-80);
      font-size: 13px;
    }
  }
  .project-collapse {
    margin-top: 30px;
    .header-icon {
      margin-left: 16px;
    }
    .project-name {
      color: var(--black);
      font-family: var(--header-font);
      font-size: 18px;
      margin-left: 8px;
    }
    .collapse-content {
      background-color: var(--white-20);
      box-sizing: border-box;
      margin: 10px 30px;
      padding: 10px;
      border-radius: 15px;
      .show-detail {
        margin-top: 8px;
        display: flex;
        width: 100%;
        justify-content: end;
      }
    }
  }
  .project-brief {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-x: scroll;
    .project {
      position: relative;
      margin: 10px 10px;
      flex-shrink: 0;
      width: 200px;
      height: 210px;
      background: linear-gradient(180deg, #f4f5f8 0%, #ffffff 100%);
      box-shadow: 8px 8px 20px 4px #f0f4f8;
      border-radius: 8px 8px 8px 8px;
      border: 3px solid #ffffff;
      box-sizing: border-box;
      padding: 5px 8px;
      display: flex;
      align-items: center;
      .btn {
        position: absolute;
        right: 0;
        top: 5px;
      }
      .detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .product-content {
          margin-top: 10px;
          max-height: 160px;
          .project-name {
            font-family:
              PingFang SC,
              PingFang SC;
            font-weight: 500;
            font-size: 14px;
            color: #3a3f63;
            max-width: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .project-desc {
            font-family:
              PingFang SC,
              PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: rgba(58, 63, 99, 0.5);
            max-height: 120px;
            overflow-y: scroll;
            margin-top: 10px;
          }
        }
        .product-icon {
          height: 90px;
          width: 60px;
          margin-right: 8px;
        }
      }
    }
    .project:hover {
      background: linear-gradient(
        180deg,
        rgba(3, 98, 239, 0.2) 0%,
        rgba(10, 103, 239, 0.05) 100%
      );
    }
  }
}
</style>
