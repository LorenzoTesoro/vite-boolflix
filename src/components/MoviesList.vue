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
  <div class="row row-cols-4 g-5">
    <MovieItem :movie="movie" v-for="movie in store.movies" />
  </div>
</template>
