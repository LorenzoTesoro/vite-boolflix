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
      class="rounded"
      type="search"
      @keypress.enter="$emit('keySearch')"
      v-model="store.config.params.query"
      placeholder="Search a movie"
    />
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      class="search"
      @click="$emit('clickSearch')"
    />
    <!-- <button class="rounded" @click="$emit('clickSearch')">Search</button> -->
  </div>
</template>

<style lang="scss" scoped>
.searchbox {
  width: 50px;
}

input {
  margin-right: 1rem;
  padding-left: 0.5rem;
  &::placeholder {
    padding-left: 0.5rem;
  }
}

// l'hover non funziona- da fixare
.search {
  color: white;
  padding-inline: 1rem;
}

.search:hover input {
  display: inline-block;
}
</style>
