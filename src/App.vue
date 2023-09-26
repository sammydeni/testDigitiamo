<script setup>
import Dashboard from './components/DashBoard.vue'

// const API_URL = `https://api.jsonbin.io/v3/b/`
// const X_MASTER_KEY = '$2a$10$Z6EQOHXv9hfHm4tL34IvKuU6ag/abdd2L1epWFOlEIFGmKiqOpU.6'
// const BIN_ID = '650d575d54105e766fb80d84'

// const url = `${API_URL}${BIN_ID}`
// const dataPack = ref(null)

// async function getAllData() {
//   try {
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'X-Master-Key': X_MASTER_KEY
//       }
//     })

//     if (!res.ok) {
//       const message = `An error has occured: ${res.status} - ${res.statusText}`
//       throw new Error(message)
//     }

//     const data = await res.json()
//     dataPack.value = data.record
//   } catch (err) {
//     console.log(err.message)
//   }
// }
</script>

<template>
  <div class="content">
    <Dashboard />
    <!-- <button @click="getAllData">SMASH</button> -->
  </div>
</template>

<style scoped></style>
