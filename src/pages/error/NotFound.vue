<template>
  <div>错误页面</div>
</template>

<script setup lang="ts">
import { messageError } from '@/utils/tips'

messageError('错误页面')
console.error('错误页面')
</script>
