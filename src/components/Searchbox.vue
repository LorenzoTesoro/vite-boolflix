<script>
import { store } from "../store.js";

export default {
  name: "SearchBox",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="searchBox">
    <input type="search" v-model="store.config.params.query" />
    <button @click="$emit('performSearch')">Cerca</button>
  </div>
</template>

<!-- TODO: fixare il keydown e capire perchè non funziona -->
