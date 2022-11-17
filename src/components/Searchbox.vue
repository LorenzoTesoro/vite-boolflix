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
    <input
      type="search"
      v-model="store.config.params.query"
      placeholder="Search a movie"
    />
    <button class="rounded" @click="$emit('searchMovie')">Search</button>
  </div>
</template>

<!-- TODO: 
    - fixare il keydown e capire perchè non funziona
    - fixare placeholder -->

<style lang="scss">
input {
  margin-right: 1rem;
}
button {
  background-color: blue;
  color: white;
  padding-inline: 1rem;
}
</style>
