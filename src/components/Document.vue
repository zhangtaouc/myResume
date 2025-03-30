<template>
  <div class="Document">
    <div class="document-list">
      <div
        v-for="(target, index) of documentlist"
        :key="index"
        class="document-item"
      >
        <el-card class="my-card" style="max-width: 480px">
          <template #header>{{ target.name }}</template>
          <div v-if="isShowMask" class="mask">
            <div class="mask-box">
              <el-input
                v-model="password"
                type="password"
                placeholder="验证码"
                show-password
              />
              <el-button type="success" @click="showDocument">展示</el-button>
            </div>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({ name: 'Document' })

const isShowMask = ref(true)

interface document {
  name: string
  url: string
  detail?: string
}

interface documentlist {
  [index: number]: document
}

const documentlist: documentlist = [
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  },
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  },
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  },
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  },
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  },
  {
    name: '身份证',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
  }
]

const password = ref('')

function showDocument() {
  isShowMask.value = !isShowMask.value
}
</script>
<style scoped lang="less">
[data-theme='light']:root {
}
.Document {
  box-sizing: border-box;
  padding: 20px;
  .document-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .document-item {
      width: 270px;
      height: 330px;
      margin: 20px 10px;
      :deep(.el-card__body) {
        position: relative;
        .mask {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 50%;
          transform: translate(-50%);
          width: 100%;
          height: 100%;
          background-color: rgba(64, 158, 255, 0.5);
          backdrop-filter: blur(10px);
          .mask-box {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
