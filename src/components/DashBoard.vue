<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import ResponseSlider from './Slider/ResponseSlider.vue'
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet'
import '@webzlodimir/vue-bottom-sheet/dist/style.css'
import BottomPage from './bottom-page/BottomPage.vue'

const API_URL = `https://api.jsonbin.io/v3/b/`
const X_MASTER_KEY = '$2a$10$Z6EQOHXv9hfHm4tL34IvKuU6ag/abdd2L1epWFOlEIFGmKiqOpU.6'
const BIN_ID_RESPONSE = '650d575d54105e766fb80d84'
const BIN_ID_ANALYSIS = '6515549a54105e766fbae58f'

const url_response = `${API_URL}${BIN_ID_RESPONSE}`
const url_analysis = `${API_URL}${BIN_ID_ANALYSIS}`

const dataPack = ref(null)
const dataAnalysis = ref(null)

async function getAllData() {
  // fetch response data
  try {
    const res = await fetch(url_response, {
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
  //fetch response analysis
  try {
    const res = await fetch(url_analysis, {
      method: 'GET',
      headers: {
        'X-Master-Key': X_MASTER_KEY
      }
    })

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`
      throw new Error(message)
    }

    const data1 = await res.json()
    dataAnalysis.value = data1.record
  } catch (err) {
    console.log(err.message)
  }
}

const myBottomSheet = ref(null)

const open = () => {
  myBottomSheet.value.open()
}

// const close = () => {
//   myBottomSheet.value.close()
// }
</script>

<template>
  <div class="container">
    <SearchBar @fetch-data="getAllData" class="search-bar" />
    <div class="results" v-if="dataPack">
      <p class="status">{{ dataPack.status }}</p>
      <p class="status-message">{{ dataPack.statusMessage }}</p>
    </div>
    <ResponseSlider v-if="dataPack" :data-pack="dataPack" />

    <button @click="open" v-if="dataPack" class="bottom-sheet-button">Timing Analysis</button>

    <vue-bottom-sheet ref="myBottomSheet" v-if="dataAnalysis">
      <BottomPage :data-analysis="dataAnalysis" />
    </vue-bottom-sheet>
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-areas: 'div2' 'div1';
}

.container .bottom-sheet-button {
  margin: 5rem auto;
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

.bottom-sheet-button {
  visibility: hidden;
}

@media screen and (max-width: 500px) {
  .bottom-sheet-button {
    visibility: visible;
    font-size: 1em;
    width: 5rem;
    border: none;
    border-radius: 10px;
    padding: 5px;
    background-color: rgb(155, 163, 233);
  }
}
</style>
