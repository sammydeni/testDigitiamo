<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import ResponseSlider from './ResponseSlider.vue'

const API_URL = `https://api.jsonbin.io/v3/b/`
const X_MASTER_KEY = '$2a$10$Z6EQOHXv9hfHm4tL34IvKuU6ag/abdd2L1epWFOlEIFGmKiqOpU.6'
const BIN_ID = '650d575d54105e766fb80d84'

const url = `${API_URL}${BIN_ID}`
const dataPack = ref(null)

async function getAllData() {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Master-Key': X_MASTER_KEY
      }
    })

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`
      throw new Error(message)
    }

    const data = await res.json()
    dataPack.value = data.record
  } catch (err) {
    console.log(err.message)
  }
}
</script>

<template>
  <div class="container">
    <SearchBar @fetch-data="getAllData" class="search-bar" />
    <div class="results" v-if="dataPack">
      <p class="status">{{ dataPack.status }}</p>
      <p class="status-message">{{ dataPack.statusMessage }}</p>
    </div>
    <ResponseSlider v-if="dataPack" :data-pack="dataPack" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-areas: 'div2' 'div1';
}

.search-bar {
  grid-area: div2;
}
.results {
  font-family: Helvetica;
  text-align: center;
  grid-area: div1;
}

@media only screen and (min-width: 500px) {
  .container {
    grid-template-areas: 'div1' 'div2';
  }
}
.status {
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 0;
}

.status-message {
  font-size: 1.5em;
  margin: 1rem;
}
</style>
