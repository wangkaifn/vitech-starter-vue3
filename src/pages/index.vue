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
</template>

<script setup lang="ts">
const msg = ref('msg')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
