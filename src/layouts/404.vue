<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <ElResult title="404" sub-title="页面不存在">
      <template #icon>
        <ElImage src="/src/assets/images/404.png" class="w-100 h-100" />
      </template>
      <template #extra>
        <ElButton type="primary" @click="handleClick">返回首页</ElButton>
      </template>
    </ElResult>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const handleClick = () => {
  router.push('/')
}
</script>

<style scoped></style>
