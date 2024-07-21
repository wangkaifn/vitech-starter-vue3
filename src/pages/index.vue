<template>
  <div class="font-900">index{{ msg }}</div>
  <div ref="target">x: {{ x }} y: {{ y }} Is Outside: {{ isOutside }}</div>
  <el-row class="mb-4">
    <el-button type="primary">按钮</el-button>
    <el-button type="primary">按钮</el-button>
    <el-button type="primary" />
    <el-button type="primary" disabled>按钮</el-button>
  </el-row>
  <icon-mdi-account />
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <div class="i-ic:baseline-5g w-1em h-1em"></div>
</template>

<script setup lang="ts">
const msg = ref('msg')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
