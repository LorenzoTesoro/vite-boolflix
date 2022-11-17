<script>
import { store } from "./store.js";
import axios from "axios";
import MoviesList from "./components/MoviesList.vue";
import SearchBox from "./components/SearchBox.vue";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    MoviesList,
    SearchBox,
  },
  methods: {
    callApi(url, params) {
      this.store.movies = [];
      axios
        .get(url, params)
        .then((response) => {
          console.log(response, "response");

          response.data.results.forEach((item) => {
            if (item.media_type === "movie" || item.media_type === "tv") {
              this.store.movies.push(item);
            }
          });

          console.log(response.data.results);
          console.log(this.store.movies, "store.moviesarray");
        })
        .catch((err) => {
          console.error(err.message);
          this.store.error = err.message;
        });
    },
  },
};
</script>

<template>
  <SearchBox @performSearch="callApi(store.API_URL, store.config)" />
  <MoviesList />
</template>

<style scoped></style>
