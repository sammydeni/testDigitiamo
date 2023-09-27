<script setup>
const props = defineProps(['dataPack'])
const dataUrl = props.dataPack
</script>
<template>
  <p :style="{ margin: '0.5rem' }">{{ dataUrl.title }}</p>
  <div class="column-box">
    <div class="line" v-for="(line, index) in dataUrl.infoArray" :key="index">
      <p class="name">{{ line.name }}</p>
      <p class="info">{{ line.info }}</p>
    </div>
  </div>
</template>
<style scoped>
.column-box {
  display: flex;
  flex-direction: column;
}
.line {
  background-color: rgb(224, 224, 224);
  padding: 0.25rem 0.5rem;
  margin-bottom: 2px;
}

.line .name {
  font-weight: bold;
}

.line .info {
  font-size: 13px;
}

p {
  margin: 0px;
}

h1 {
  width: 100%;
}
</style>
