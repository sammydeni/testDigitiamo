<script setup>
import VueSpeedometer from 'vue-speedometer'
const props = defineProps(['data'])
console.log(props.data)
</script>

<template>
  <vue-speedometer :value="data" :maxValue="800" />
</template>

<style scoped></style>
