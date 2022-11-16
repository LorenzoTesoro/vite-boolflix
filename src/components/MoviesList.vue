<script>
import MovieItem from "./MovieItem.vue";
import { store } from "../store.js";

export default {
  name: "MoviesList",
  data() {
    return {
      store,
    };
  },
  components: {
    MovieItem,
  },
};
</script>

<template>
  <ul>
    <MovieItem :movie="movie" v-for="movie in store.movies" />
  </ul>
</template>
