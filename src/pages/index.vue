<template>
  <div>home</div>
</template>

<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
import { registerSW } from 'virtual:pwa-register'
onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(swScriptUrl, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 5000)
    }
  })
})
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: default
  bgColor: yellow
</route>
