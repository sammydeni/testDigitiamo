<script setup>
const props = defineProps(['dataPack'])
</script>

<template>
  <div class="content">
    <div class="slider">
      <div class="card">
        <p :style="{ margin: '0.5rem' }">{{ props.dataPack.url_info.title }}</p>
        <div class="column-box">
          <div class="line" v-for="(line, index) in props.dataPack.url_info.infoArray" :key="index">
            <p class="name">{{ line.name }}</p>
            <p class="info">{{ line.info }}</p>
          </div>
        </div>
      </div>
      <div class="card"><h1>PIO CALABBRISI</h1></div>
      <div class="card"><h1>LOL</h1></div>
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
  border-radius: 15px;
  min-height: 22rem;
  min-width: 21rem;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-items: center;
  text-align: center; */
  border: 1px solid rgb(238, 238, 238);
}

.card p {
  margin: 0px;
}

.card h1 {
  width: 100%;
}

.card:first-child {
  margin-left: 1rem;
  background-color: rgb(238, 238, 238);
}
</style>
