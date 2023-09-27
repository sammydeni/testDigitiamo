<script setup>
const props = defineProps(['dataPack'])
const dataResponse = props.dataPack
</script>
<template>
  <p :style="{ margin: '0.5rem' }">RESPONSE</p>
  <div class="column-box">
    <div class="line" v-for="(line, index) in dataResponse" :key="index">
      <p class="name">{{ line }}</p>
    </div>
  </div>
</template>
<style scoped>
.column-box {
  display: flex;
  flex-direction: column;
}
.line {
  background-color: rgb(238, 238, 238);
  padding: 0.5rem 0.5rem;
  margin-bottom: 1px;
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
