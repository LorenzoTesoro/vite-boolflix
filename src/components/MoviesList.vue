<script>
import MovieItem from "./MovieItem.vue";
import { store } from "../store.js";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
  },
  data() {
    store;
  },
};
</script>

<template>
  <ul>
    <MovieItem :movie="movie" v-for="movie in store.movies" />
  </ul>
</template>
