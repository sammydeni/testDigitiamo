<script setup>
import SpeedoMeter from './SpeedoMeter.vue'
const props = defineProps(['dataAnalysis'])
const data = props.dataAnalysis
</script>
<template>
  <p class="title">{{ data.title }}</p>
  <div class="center">
    <div v-for="(graph, index) in data.graphsArray" :key="index">
      <SpeedoMeter :data="graph.score" height="18" />
      <h1 :style="{ marginTop: '5px', color: 'grey' }">{{ graph.info }}</h1>
      <h1 :style="{ margin: '0 0 5 0' }">{{ graph.speed }}</h1>
    </div>
  </div>
</template>
<style scoped>
.title {
  margin-left: 0.5rem;
  color: rgb(201, 201, 201);
  font-size: 1.5rem;
  font-weight: bold;
}
.center {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 1rem;
}
</style>
