<script setup>
import ResponseCard from './ResponseCard.vue'
import UrlCard from './UrlCard.vue'
const props = defineProps(['dataPack'])
const dataPack = props.dataPack
</script>

<template>
  <div class="content">
    <div class="slider">
      <div class="card">
        <!-- render of url info card only -->
        <UrlCard :dataPack="dataPack.url_info" />
      </div>
      <!-- render of all the responses -->
      <div
        class="card"
        v-for="(responseItem, index) in dataPack.response.responseArray"
        :key="index"
      >
        <ResponseCard :dataPack="responseItem" />
      </div>
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

@media screen and (min-width: 1000px) {
  .slider {
    justify-content: center;
  }
}

.slider::-webkit-scrollbar {
  display: none;
}

.card {
  scroll-snap-align: center;
  border-radius: 15px;
  min-height: 23rem;
  min-width: 21rem;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(238, 238, 238);
}

.card:first-child {
  margin-left: 1rem;
  background-color: rgb(238, 238, 238);
}

.card:last-child {
  margin-right: 1rem;
}
</style>
