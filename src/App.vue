<script setup lang="ts">
import { init } from './utils/init'
// 颜色主题
document.documentElement.setAttribute('data-theme', 'light')
init()
</script>

<template>
  <RouterView />
</template>

<style>
body {
  padding: 0;
  margin: 0 !important;
}
</style>
