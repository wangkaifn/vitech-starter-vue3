<script setup lang="ts">
// import { RouterView } from 'vue-router'
// import { ref } from 'vue'
const target = useTemplateRef<HTMLDivElement>('target')
const count = ref(0)
const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div class="container flex items-center justify-center bg-red-500 text-white">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
  </div>
  <button @click="count++">点击</button>
  <p>{{ count }}</p>
  <RouterView />
  <div ref="target" class="w-100 h-100 bg-blue-500">
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <p>isOutside: {{ isOutside }}</p>
  </div>
  <ElButton @click="count++">点击</ElButton>
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
