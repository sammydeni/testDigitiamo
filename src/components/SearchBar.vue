<script setup>
const props = defineProps(['readOnly'])
const emit = defineEmits(['fetch-data'])
</script>

<template>
  <div class="box">
    <div class="l-button">
      <button>GET</button>
    </div>
    <input id="search" type="text" name="search" :class="props.readOnly ? 'curved' : ''" />
    <div class="r-button" v-if="!readOnly">
      <button @click="emit('fetch-data')">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="lg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  height: 3.5rem;
  max-width: 400px;
  min-width: 360px;
  margin: 0 auto;
}

.hidden {
  visibility: hidden;
}

.l-button {
  background-color: rgb(238, 238, 238);
  border-radius: 15px 0px 0px 15px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.curved {
  border-radius: 0px 15px 15px 0px;
}

.r-button {
  background-color: rgb(238, 238, 238);
  border-radius: 0px 15px 15px 0px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l-button button {
  height: 75%;
  width: 3.5em;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  color: rgb(148, 148, 148);
  background-color: white;
}

.r-button button {
  height: 75%;
  width: 3.5em;
  border: none;
  border-radius: 10px;
  background-color: rgb(155, 163, 233);
}

#search {
  display: inline-flex;
  background-color: rgb(238, 238, 238);
  width: 80%;
  border: none;
  padding-left: 1em;
}
#search:focus {
  outline: none;
}
</style>
