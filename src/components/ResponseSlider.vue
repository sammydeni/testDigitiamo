<script setup>
const props = defineProps(['dataPack'])
</script>

<template>
  <div class="content">
    <div class="slider">
      <div class="card">
        <h1>{{ props.dataPack.status }}</h1>
      </div>
      <div class="card"><h1>PIO CALABBRISI</h1></div>
      <div class="card"><h1>LOL</h1></div>
      <div class="card"><h1>CACA</h1></div>
      <div class="card"><h1>WERT</h1></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  margin-top: 1rem;
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
  scroll-snap-align: center;
  border-radius: 30px;
  min-height: 15rem;
  min-width: 21rem;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 1px solid rgb(238, 238, 238);
}

.card h1 {
  width: 100%;
}

.card:first-child {
  margin-left: 1rem;
  background-color: rgb(238, 238, 238);
}
</style>
