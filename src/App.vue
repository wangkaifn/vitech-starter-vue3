<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container flex items-center justify-center bg-red-500 text-white">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  background-color: #f0f0f0;
  height: 50px;
}
</style>
