<script setup>
import Dashboard from './components/DashBoard.vue'
// import VueBottomSheet from '@webzlodimir/vue-bottom-sheet'
import '@webzlodimir/vue-bottom-sheet/dist/style.css'

// const myBottomSheet = ref(null)

// const open = () => {
//   myBottomSheet.value.open()
// }

// const close = () => {
//   myBottomSheet.value.close()
// }
</script>

<template>
  <Dashboard />
  <!-- <div class="bottom-sheet-button">
    <button @click="open">Timing Analasys</button>
  </div>
  <vue-bottom-sheet ref="myBottomSheet">
    <h1>Lorem Ipsum</h1>
    <h2>What is Lorem Ipsum?</h2>
    <p><strong>Lorem Ipsum</strong> is simply dummy text</p>
  </vue-bottom-sheet> -->
</template>

<style scoped>
/* .bottom-sheet-button {
  visibility: hidden;
}

@media screen and (max-width: 500px) {
  .bottom-sheet-button {
    visibility: visible;
  }
} */
</style>
