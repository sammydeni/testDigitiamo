<script setup>
import VueSpeedometer from 'vue-speedometer'
const props = defineProps(['data'])
</script>

<template>
  <vue-speedometer :value="props.data" :maxValue="800" />
</template>

<style scoped></style>
