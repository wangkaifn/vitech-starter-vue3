<template>
  <ElResult title="404" sub-title="Sorry, request error">
    <template #icon>
      <ElImage src="/pk-front-vue3/src/assets/images/404.png" />
    </template>
    <template #extra>
      <ElButton type="primary">返回首页</ElButton>
    </template>
  </ElResult>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped></style>
