<template>
  <div class="font-900">index{{ msg }}</div>
  <div ref="target">x: {{ x }} y: {{ y }} Is Outside: {{ isOutside }}</div>
</template>

<script setup lang="ts">
const msg = ref('msg')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
