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
      @keypress.enter="$emit('keySearch')"
      v-model="store.config.params.query"
      placeholder="Search a movie"
    />
    <button class="rounded" @click="$emit('clickSearch')">Search</button>
  </div>
</template>

<style lang="scss">
input {
  margin-right: 1rem;
  padding-left: 0.2rem;
  &::placeholder {
    padding-left: 1rem;
  }
}
button {
  background-color: blue;
  color: white;
  padding-inline: 1rem;
}
</style>
