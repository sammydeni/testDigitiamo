<script setup>
const props = defineProps(['dataPack'])
</script>

<template>
  <div class="content">
    <div class="slider">
      <div class="card">
        <h1>{{ props.dataPack.status }}</h1>
      </div>
      <div class="card"><h1>EEEE</h1></div>
      <div class="card"><h1>LOOOL</h1></div>
      <div class="card"><h1>CACA</h1></div>
      <div class="card"><h1>WERT</h1></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  margin-top: 2rem;
}
.slider {
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto;
  gap: 1rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.card {
  scroll-snap-align: start;
  border-radius: 30px;
  min-height: 15rem;
  min-width: 20rem;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.card h1 {
  width: 100%;
}

.card:nth-child(odd) {
  background-color: aquamarine;
}

.card:nth-child(even) {
  background-color: blueviolet;
}
</style>
