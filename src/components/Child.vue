<template>
  <div>
    <p>child component</p>
    <ElButton @click="handleClick"> click me </ElButton>
    ceshi
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const emits = defineEmits<{
  clickCount: [count: number]
}>()
const handleClick = () => {
  console.log('click me')
  emits('clickCount', ++count.value)
}
</script>

<style scoped></style>
