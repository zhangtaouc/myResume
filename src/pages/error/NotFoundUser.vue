<template>
  <div>user错误页面</div>
</template>

<script setup lang="ts">
import { messageError } from '@/utils/tips'

messageError('user错误页面')
console.error('User错误页面')
</script>
