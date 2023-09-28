<script setup>
// import { useRoute } from 'vue-router'
import { ref } from 'vue'
import ResponseSlider from './Slider/ResponseSlider.vue'
import SearchBar from './SearchBar.vue'
// const route = useRoute()
// console.log(route.params.status)

const API_URL = `https://api.jsonbin.io/v3/b/`
const X_MASTER_KEY = '$2a$10$Z6EQOHXv9hfHm4tL34IvKuU6ag/abdd2L1epWFOlEIFGmKiqOpU.6'
const BIN_ID_RESPONSE = '650d575d54105e766fb80d84'
const url_response = `${API_URL}${BIN_ID_RESPONSE}`
const dataPack = ref(null)

// i'm reusing this function because I was't able to pass the object with params
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
}

getAllData()

console.log(dataPack)
</script>
<template>
  <div class="container">
    <SearchBar read-only="true" />
    <ResponseSlider v-if="dataPack" :data-pack="dataPack" />
  </div>
</template>
<style scoped>
.container {
  margin: 1rem 1rem;
  width: 100%;
}
</style>
